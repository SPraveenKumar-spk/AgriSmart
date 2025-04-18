from flask import Blueprint, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np
from PIL import Image
import requests
import tempfile
from keras.models import load_model
from joblib import load
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.applications.vgg19 import  preprocess_input 



ml_bp = Blueprint("ml", __name__,url_prefix="/api")
CORS(ml_bp)


crop_model = load("./models/cropmodel.pkl")
Fertilizer_model = load("./models/Fertilizer.pkl")
yield_model = load("./models/Yield.pkl")
crop_disease = load_model("./models/Cropdisease.h5")

ferticrop_encoder = load("./models/encoders/crop_type_label_encoder.pkl")
fertisoil_encoder = load("./models/encoders/soil_type_label_encoder.pkl")

Yield_Crop_encoder = load("./models/encoders/Yield_Crop_encoder.pkl")
Yield_Season_encoder = load("./models/encoders/Yield_Season_encoder.pkl")
Yield_State_encoder = load("./models/encoders/Yield_State_encoder.pkl")

@ml_bp.route("/")
def index():
    return "Hello World"

def recommendation(N, P, k, temperature, humidity, ph, rainfall):
    features = np.array([[N, P, k, temperature, humidity, ph, rainfall]])
    prediction = crop_model.predict(features)
    return prediction[0]

@ml_bp.route('/croprecommend', methods=["POST"])
def get_data():
    try:
        data = request.json
  
        feature_values = [data.get('nitrogen'), data.get('phosphorous'), data.get('potassium'),
                          data.get('temperature'), data.get('humidity'), data.get('ph'), data.get('rainfall')]
        prediction = recommendation(*feature_values)
        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                     8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                     14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                     19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}
        if prediction in crop_dict:
            crop = crop_dict[prediction]
            return jsonify({"crop": crop})
        else:
            return jsonify({"error": "Unable to recommend a proper crop for this environment"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@ml_bp.route("/fertilizer", methods=["POST"])
def fertilizer():
    try:
        data = request.json
        crop = ferticrop_encoder.transform([data.get('crop')])[0]

        soil = fertisoil_encoder.transform([data.get('soil')])[0]
        temperature = float(data.get('temperature', 0.0))
        humidity = float(data.get('humidity', 0.0))
        moisture = float(data.get('moisture', 0.0))
        nitrogen = float(data.get('nitrogen', 0.0))
        potassium = float(data.get('potassium', 0.0))
        phosphorous = float(data.get('phosphorous', 0.0))
        prediction_data = np.array([[temperature, humidity, moisture, soil, crop, nitrogen, potassium, phosphorous]])
        print("data", prediction_data)
        prediction = Fertilizer_model.predict(prediction_data)
        fertilizer_dict = {
            0: '10-26-26',
            1: '14-35-14',
            2: '17-17-17',
            3: '20-20',
            4: '28-28',
            5: 'DAP',
            6: 'Urea'
        }

        if prediction[0] in fertilizer_dict:
            fertilizer = fertilizer_dict[prediction[0]]
            print("fertilizer", fertilizer)
            return jsonify({"fertilizer": fertilizer})
        else:
            return jsonify({"error": "Unable to recommend a proper fertilizer for this environment"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@ml_bp.route("/yield", methods=["POST"])
def yield_predict():
    data = request.json
    crop = Yield_Crop_encoder.transform([data.get('crop')])[0]
    state = Yield_State_encoder.transform([data.get('state')])[0]
    season = Yield_Season_encoder.transform([data.get('season')])[0]
    area = float(data.get('area', 0.0))
    production = float(data.get('production', 0.0))
    rainfall = float(data.get('rainfall', 0.0))
    fertilizer = float(data.get('fertilizer', 0.0))
    pesticide = float(data.get('pesticide', 0.0))
    prediction_data = np.array([[crop, season, state, area, production, rainfall, fertilizer, pesticide]])
    prediction = yield_model.predict(prediction_data)

    return jsonify({'yield': float(prediction[0])})

@ml_bp.route("/cropdisease",methods = ["POST"])
def cropdisease():
   
    try:
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400

        image_file = request.files['image']
        
        img = Image.open(image_file)
        img = img.convert("RGB")
        img = img.resize((256, 256))
        i = img_to_array(img)

        im = preprocess_input(i)

        img = np.expand_dims(im , axis = 0)

        pred = np.argmax(crop_disease.predict(img))

       
        ref = {
            0: 'Apple___Apple_scab', 1: 'Apple___Black_rot', 2: 'Apple___Cedar_apple_rust', 
            3: 'Apple___healthy', 4: 'Blueberry___healthy', 5: 'Cherry_(including_sour)___Powdery_mildew', 
            6: 'Cherry_(including_sour)___healthy', 7: 'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 
            8: 'Corn_(maize)___Common_rust_', 9: 'Corn_(maize)___Northern_Leaf_Blight', 10: 'Corn_(maize)___healthy', 
            11: 'Grape___Black_rot', 12: 'Grape___Esca_(Black_Measles)', 13: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
            14: 'Grape___healthy', 15: 'Orange___Haunglongbing_(Citrus_greening)', 16: 'Peach___Bacterial_spot', 
            17: 'Peach___healthy', 18: 'Pepper,_bell___Bacterial_spot', 19: 'Pepper,_bell___healthy', 
            20: 'Potato___Early_blight', 21: 'Potato___Late_blight', 22: 'Potato___healthy', 
            23: 'Raspberry___healthy', 24: 'Soybean___healthy', 25: 'Squash___Powdery_mildew', 
            26: 'Strawberry___Leaf_scorch', 27: 'Strawberry___healthy', 28: 'Tomato___Bacterial_spot', 
            29: 'Tomato___Early_blight', 30: 'Tomato___Late_blight', 31: 'Tomato___Leaf_Mold', 32: 'Tomato___Septoria_leaf_spot', 
            33: 'Tomato___Spider_mites Two-spotted_spider_mite', 34: 'Tomato___Target_Spot', 
            35: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 36: 'Tomato___Tomato_mosaic_virus', 37: 'Tomato___healthy'}
        
        print(f" the image belongs to { ref[pred] } ")
        return jsonify({"disease": ref[pred]})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

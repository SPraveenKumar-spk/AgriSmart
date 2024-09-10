from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import numpy as np
import jwt
import requests
import tempfile

app = Flask(__name__)
app.config['SECRET_KEY'] = 'AgriSmart'
app.config['CORS_ALLOW_ORIGINS'] = ['https://agrismart-ai.vercel.app']
CORS(app)

GITHUB_RAW_URL = "https://raw.githubusercontent.com/SPraveenKumar-spk/AgriSmart/main/Server/models/"

def download_model_from_github(model_name):
    url = f"{GITHUB_RAW_URL}{model_name}"
    response = requests.get(url)
    if response.status_code == 200:
        with tempfile.NamedTemporaryFile(delete=False) as temp_file:
            temp_file.write(response.content)
            temp_file.close()
            return joblib.load(temp_file.name)
    else:
        raise Exception(f"Failed to download {model_name} from GitHub")

croprecommendation = download_model_from_github('croprecommendationmodel.pkl')
fertilizer_model = download_model_from_github('Fertilizer.pkl')
soil_encoder = download_model_from_github('soil_encoder.pkl')
fertiencoder = download_model_from_github('ferticrop_encoder.pkl')
yield_model = download_model_from_github('Yield.pkl')
season_encoder = download_model_from_github('season_encoder.pkl')
crop_encoder = download_model_from_github('crop_encoder.pkl')
state_encoder = download_model_from_github('state_encoder.pkl')

@app.route("/")
def index():
    return "Hello World"

@app.route("/generate-token", methods=["POST"])
def generate_token():
    data = request.get_json()
    phone_number = data["phone_number"]
    token = jwt.encode({"phone_number": phone_number}, app.config['SECRET_KEY'], algorithm="HS256")
    if token:
        return jsonify({"token": token}), 200 
    else:
        return jsonify({"error": "Token generation failed"}), 400

def recommendation(N, P, k, temperature, humidity, ph, rainfall):
    features = np.array([[N, P, k, temperature, humidity, ph, rainfall]])
    prediction = croprecommendation.predict(features)
    return prediction[0]

@app.route('/api/croprecommend', methods=["POST"])
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

@app.route("/api/fertilizer", methods=["POST"])
def fertilizer():
    try:
        data = request.json
        crop = fertiencoder.transform([data.get('crop')])[0]
        soil = soil_encoder.transform([data.get('soil')])[0]
        temperature = float(data.get('temperature', 0.0))
        humidity = float(data.get('humidity', 0.0))
        moisture = float(data.get('moisture', 0.0))
        nitrogen = float(data.get('nitrogen', 0.0))
        potassium = float(data.get('potassium', 0.0))
        phosphorous = float(data.get('phosphorous', 0.0))
        prediction_data = np.array([[temperature, humidity, moisture, soil, crop, nitrogen, potassium, phosphorous]])
        prediction = fertilizer_model.predict(prediction_data)
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
            return jsonify({"fertilizer": fertilizer})
        else:
            return jsonify({"error": "Unable to recommend a proper fertilizer for this environment"}), 400

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/yield", methods=["POST"])
def yield_predict():
    data = request.json
    crop = crop_encoder.transform([data.get('crop')])[0]
    state = state_encoder.transform([data.get('state')])[0]
    season = season_encoder.transform([data.get('season')])[0]
    area = float(data.get('area', 0.0))
    production = float(data.get('production', 0.0))
    rainfall = float(data.get('rainfall', 0.0))
    fertilizer = float(data.get('fertilizer', 0.0))
    pesticide = float(data.get('pesticide', 0.0))
    prediction_data = np.array([[crop, season, state, area, production, rainfall, fertilizer, pesticide]])
    prediction = yield_model.predict(prediction_data)

    return jsonify({'yield': float(prediction[0])})

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)

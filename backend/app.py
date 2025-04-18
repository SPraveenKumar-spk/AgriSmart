# app.py

from flask import Flask
from flask_cors import CORS
from auth_routes import auth_bp
from profile_routes import profile_bp
from ml_routes import ml_bp
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
CORS(app)


app.register_blueprint(auth_bp)
app.register_blueprint(profile_bp)
app.register_blueprint(ml_bp)

@app.route('/')
def home():
    return "Welcome to AgriSmart Backend API"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

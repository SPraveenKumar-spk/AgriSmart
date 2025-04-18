from flask import Blueprint, request, jsonify
from db import db, cursor
import bcrypt
import jwt
import os

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")
SECRET_KEY = os.getenv("SECRET_KEY")

@auth_bp.route("/register", methods=["POST"]) 
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    role = data.get("role", "farmer")

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    if cursor.fetchone():
        return jsonify({"message": "Email already exists"}), 409

    hashed_pw = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    cursor.execute(
        "INSERT INTO users (name, email, password, role) VALUES (%s, %s, %s, %s)",
        (name, email, hashed_pw.decode(), role)
    )
    db.commit()
    return jsonify({"message": "Signup successful"}), 201


@auth_bp.route("/login", methods=["POST"])  # <-- /api/auth/login
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()

    if user and bcrypt.checkpw(password.encode(), user["password"].encode()):
        token = jwt.encode({
            "id": user["id"],
            "email": user["email"],
            "name": user["name"],
            "role": user["role"]
        }, SECRET_KEY, algorithm="HS256")
        return jsonify({"token": token}), 200

    return jsonify({"message": "Invalid credentials"}), 401


@auth_bp.route("/userinfo", methods=["GET"]) 
def userinfo():
    token = request.args.get("token")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify(payload), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Invalid token"}), 403

from flask import Blueprint, jsonify

profile_bp = Blueprint('profile', __name__,"/api/profile")

@profile_bp.route('/schemes', methods=["GET"])
def get_government_schemes():
    # Dummy data, can be replaced with DB or API fetch
    return jsonify({
        "schemes": [
            {"title": "PM-Kisan", "description": "₹6000/year to eligible farmers."},
            {"title": "Soil Health Card", "description": "Government provides free soil testing and suggestions."},
            {"title": "Crop Insurance", "description": "Pradhan Mantri Fasal Bima Yojana for crop loss coverage."}
        ]
    })

@profile_bp.route('/tips', methods=["GET"])
def get_tips():
    return jsonify({
        "tips": [
            "Use crop rotation to maintain soil fertility.",
            "Do not over-irrigate; follow weather patterns.",
            "Test your soil every 2 seasons."
        ]
    })

@profile_bp.route('/market', methods=["GET"])
def get_market_prices():
    return jsonify({
        "prices": {
            "Wheat": "₹22/kg",
            "Rice": "₹30/kg",
            "Tomato": "₹14/kg",
            "Onion": "₹18/kg"
        }
    })

@profile_bp.route('/news', methods=["GET"])
def get_agri_news():
    return jsonify({
        "news": [
            {"title": "Monsoon Likely to Arrive Early", "source": "AgriTimes"},
            {"title": "Government Raises MSP for Wheat", "source": "Krishi News"}
        ]
    })

@profile_bp.route('/tools', methods=["GET"])
def get_tools():
    return jsonify({
        "tools": [
            {"name": "Crop Calculator", "url": "/tools/crop-calculator"},
            {"name": "Fertilizer Guide", "url": "/tools/fertilizer-guide"},
            {"name": "Pest Identifier", "url": "/tools/pest-identifier"}
        ]
    })

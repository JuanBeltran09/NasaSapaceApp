from flask import Blueprint, request, jsonify

weather_bp = Blueprint("weather", __name__)

@weather_bp.route("/weather", methods=["POST"])
def get_weather_probabilities():
    data = request.get_json()
    location = data.get("location")
    date = data.get("date")

    # Simulación temporal (luego se conecta a NASA)
    response = {
        "location": location,
        "date": date,
        "probabilities": {
            "muy_caliente": 0.2,
            "muy_frio": 0.1,
            "muy_humedo": 0.4,
            "muy_ventoso": 0.3,
            "muy_incomodo": 0.25
        },
        "variables_usadas": ["temperatura", "humedad", "viento"]
    }

    return jsonify(response), 200

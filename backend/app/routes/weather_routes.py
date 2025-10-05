from flask import Blueprint, request, jsonify
from app.services.nasa_data_service import get_nasa_weather_data
from app.services.analysis_service import calculate_weather_probabilities

weather_bp = Blueprint("weather", __name__)

@weather_bp.route("/weather", methods=["POST"])
def get_weather_probabilities():
    data = request.get_json()
    location = data.get("location")
    lat = data.get("lat")
    lon = data.get("lon")
    date = data.get("date")

    try:
        nasa_data = get_nasa_weather_data(lat, lon, date)
        analysis = calculate_weather_probabilities(nasa_data)

        return jsonify({
            "location": location,
            "date": date,
            "resultados": analysis["probabilidades"],
            "estadisticas": analysis["estadisticas"],
            "variables_usadas": ["T2M", "PRECTOTCORR", "WS10M"]
        }), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

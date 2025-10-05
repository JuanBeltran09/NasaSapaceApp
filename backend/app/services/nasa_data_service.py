import requests
from datetime import datetime

NASA_POWER_URL = "  "

def get_nasa_weather_data(lat, lon, date_str, years_back=10):
    """
    Consulta datos históricos NASA POWER para la ubicación dada.
    Devuelve un resumen de los últimos N años alrededor de la fecha seleccionada.
    """
    target_date = datetime.strptime(date_str, "%Y-%m-%d")
    start_year = target_date.year - years_back
    end_year = target_date.year - 1  # hasta el año anterior al actual

    params = {
        "parameters": "T2M,PRECTOTCORR,WS10M",
        "start": f"{start_year}0101",
        "end": f"{end_year}1231",
        "latitude": lat,
        "longitude": lon,
        "community": "RE",
        "format": "JSON"
    }

    response = requests.get(NASA_POWER_URL, params=params)
    if response.status_code != 200:
        raise Exception(f"Error en API NASA POWER: {response.status_code} -> {response.text}")

    return response.json()

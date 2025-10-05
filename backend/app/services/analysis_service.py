import random

def get_weather_probabilities(location, date):
    """
    Ejemplo de respuesta simulada — luego se conectará con los datos NASA reales.
    """
    return {
        "location": location,
        "date": date,
        "probabilities": {
            "very_hot": f"{random.randint(10, 90)}%",
            "very_cold": f"{random.randint(5, 60)}%",
            "very_windy": f"{random.randint(5, 50)}%",
            "very_wet": f"{random.randint(10, 70)}%",
            "uncomfortable": f"{random.randint(10, 80)}%"
        },
        "variables_used": [
            "Temperature (MERRA-2)",
            "Precipitation (GPM IMERG)",
            "Wind speed (MERRA-2)",
            "Humidity (MODIS)"
        ],
        "source": "NASA GES DISC + Giovanni"
    }

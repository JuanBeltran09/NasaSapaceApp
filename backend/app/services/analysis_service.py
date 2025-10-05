import numpy as np

def calculate_weather_probabilities(nasa_data):
    """
    Analiza los datos históricos de NASA POWER y estima probabilidades
    de condiciones extremas (muy caliente, muy frío, etc.)
    """

    try:
        parameters = nasa_data["properties"]["parameter"]

        t2m = list(parameters["T2M"].values())
        prectot = list(parameters["PRECTOTCORR"].values())
        ws10m = list(parameters["WS10M"].values())

        # Convertir a numpy arrays para cálculos estadísticos
        t2m = np.array(t2m)
        prectot = np.array(prectot)
        ws10m = np.array(ws10m)

        # Calcular porcentajes de días que cumplen cada condición
        prob_hot = np.mean(t2m > 30)
        prob_cold = np.mean(t2m < 10)
        prob_wet = np.mean(prectot > 10)
        prob_windy = np.mean(ws10m > 8)
        prob_uncomfortable = np.mean((t2m > 28) & (prectot > 5))

        results = {
            "muy_caliente": round(prob_hot, 2),
            "muy_frio": round(prob_cold, 2),
            "muy_humedo": round(prob_wet, 2),
            "muy_ventoso": round(prob_windy, 2),
            "muy_incomodo": round(prob_uncomfortable, 2),
        }

        # Agregar estadísticos descriptivos para contexto
        stats = {
            "temperatura_media": round(np.mean(t2m), 2),
            "precipitacion_media": round(np.mean(prectot), 2),
            "viento_medio": round(np.mean(ws10m), 2),
        }

        return {"probabilidades": results, "estadisticas": stats}

    except Exception as e:
        raise Exception(f"Error analizando datos NASA: {e}")

import numpy as np

def calculate_weather_probabilities(nasa_data):
    """
    Analiza datos históricos de NASA POWER y estima proporciones de tipos de clima típicos:
    soleado, nublado, lluvia ligera, lluvia fuerte, ventoso, extremo.
    Las categorías suman 100%.
    """

    try:
        parameters = nasa_data["properties"]["parameter"]

        t2m = np.array(list(parameters["T2M"].values()))            # Temperatura (°C)
        prectot = np.array(list(parameters["PRECTOTCORR"].values()))  # Precipitación (mm/día)
        ws10m = np.array(list(parameters["WS10M"].values()))         # Viento (m/s)

        n = len(t2m)

        categories = {
            "soleado": 0,
            "nublado": 0,
            "lluvia_ligera": 0,
            "lluvia_fuerte": 0,
            "ventoso": 0,
            "extremo": 0
        }

        for i in range(n):
            t = t2m[i]
            p = prectot[i]
            w = ws10m[i]

            # Reglas simples inspiradas en meteorología general
            if t > 35 or w > 12 or p > 30:
                categories["extremo"] += 1  # calor o lluvia o viento extremos
            elif p > 15:
                categories["lluvia_fuerte"] += 1
            elif p > 2:
                categories["lluvia_ligera"] += 1
            elif w > 8:
                categories["ventoso"] += 1
            elif p <= 2 and t > 18:
                categories["soleado"] += 1
            else:
                categories["nublado"] += 1

        # Convertir a porcentajes
        probs = {k: round(v / n * 100, 1) for k, v in categories.items()}

        # Asegurar suma = 100% (por si hay redondeo)
        total = sum(probs.values())
        if total != 100:
            diff = 100 - total
            # Ajuste menor al mayor valor
            max_key = max(probs, key=probs.get)
            probs[max_key] = round(probs[max_key] + diff, 1)

        # Estadísticas descriptivas
        stats = {
            "temperatura_media": round(np.mean(t2m), 2),
            "precipitacion_media": round(np.mean(prectot), 2),
            "viento_medio": round(np.mean(ws10m), 2),
        }

        return {"probabilidades": probs, "estadisticas": stats}

    except Exception as e:
        raise Exception(f"Error analizando datos NASA: {e}")

from flask import Flask
from flask_cors import CORS
import os

def create_app():
    app = Flask(__name__)

    # ✅ Permitir CORS tanto desde local como desde GitHub Pages
    CORS(app, origins=[
        "http://localhost:3000",
        "https://tu-usuario.github.io"  # ← cámbialo por tu URL real de GitHub Pages
    ])

    # Importar rutas
    from app.routes.health_routes import health_bp
    from app.routes.weather_routes import weather_bp

    # Registrar Blueprints
    app.register_blueprint(health_bp)
    app.register_blueprint(weather_bp, url_prefix="/api")

    return app


# ✅ Punto de entrada para Railway / Gunicorn
app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

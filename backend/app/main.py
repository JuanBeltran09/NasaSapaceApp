from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # ✅ Habilitar CORS para el frontend (React)
    CORS(app, origins=["http://localhost:3000"])

    # Importar rutas
    from app.routes.health_routes import health_bp
    from app.routes.weather_routes import weather_bp

    # Registrar Blueprints
    app.register_blueprint(health_bp)
    app.register_blueprint(weather_bp, url_prefix="/api")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)

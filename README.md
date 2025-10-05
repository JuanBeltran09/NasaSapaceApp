# 🌦️ Parce, ¿Va a llover?

**Parce, ¿Va a llover?** es una aplicación web que analiza datos meteorológicos de la NASA para estimar la probabilidad de lluvia, temperatura y viento en una ubicación y fecha determinadas.  
Su objetivo es ofrecer una interfaz sencilla y visual para entender las condiciones del clima, combinando un backend en **Python (Flask)** con un frontend en **React**.

---

## 🧠 Características principales

- 🔭 Obtiene datos climáticos reales de fuentes de la **NASA**.  
- 📊 Calcula probabilidades y estadísticas de **precipitación**, **temperatura** y **viento**.  
- 🗺️ Permite consultar el clima por ubicación (nombre o coordenadas).  
- 💡 Interfaz intuitiva y moderna con **React**.  

---

## ⚙️ Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

### 🐍 Python (para el backend)
- [Descargar Python](https://www.python.org/downloads/)
- Verifica instalación:
  ```bash
  python --version
  # o
  python3 --version
  ```

### 🟢 Node.js y npm (para el frontend)
- [Descargar Node.js](https://nodejs.org/)
- Verifica instalación:
  ```bash
  node --version
  npm --version
  ```

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/JuanBeltran09/NasaSapaceApp.git
```

---

### 2️⃣ Configurar y ejecutar el **backend**

#### 📂 Ir a la carpeta del backend:
```bash
cd backend
```

#### 📦 Instalar dependencias:
```bash
pip install -r requirements.txt
```

> 💡 Si `pip` no está disponible, usa:
> ```bash
> python -m pip install -r requirements.txt
> ```

#### ▶️ Ejecutar el servidor Flask:
```bash
python app.main
# o
python3 -m app.main
```

El backend se iniciará en **http://localhost:5000** por defecto.

---

### 3️⃣ Configurar y ejecutar el **frontend**

#### 📂 Ir a la carpeta del frontend:
```bash
cd ../frontend
```

#### 📦 Instalar dependencias de Node:
```bash
npm install
```

#### ▶️ Ejecutar la aplicación React:
```bash
npm run start
```

El frontend se iniciará en **http://localhost:3000** automáticamente.

---

## 🧩 Estructura del proyecto

```
parce-va-a-llover/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── services/
│   │   └── ...
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 💻 Ejemplo rápido

1. Inicia el backend:
   ```bash
   cd backend
   python3 -m app.main
   ```
2. Inicia el frontend:
   ```bash
   cd ../frontend
   npm run start
   ```
3. Abre el navegador en:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🪟 Notas para usuarios de Windows

Si usas PowerShell o CMD:

- Usa `python` en lugar de `python3`.
- Si el comando `npm` no se reconoce, asegúrate de reiniciar la terminal tras instalar Node.js.

---

## 🐧 Notas para usuarios de Linux / macOS

Asegúrate de tener permisos para instalar paquetes:
```bash
sudo apt install python3-pip
sudo apt install nodejs npm
```

---

## 🧠 Créditos

Proyecto desarrollado como parte del **análisis de datos meteorológicos con APIs de la NASA**, combinando:
- **Flask (Python)** para el backend.
- **React + Vite** para el frontend.

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**.  
Siéntete libre de usarlo, modificarlo y mejorarlo.  

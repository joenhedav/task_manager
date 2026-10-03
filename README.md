# 📋 Task Manager

Aplicación web para la **gestión de tareas**, desarrollada con React, Node.js, Express y PostgreSQL.
El proyecto está completamente **dockerizado**, por lo que no es necesario instalar Node.js ni PostgreSQL en el sistema para ejecutarlo.

---
## 🛠️ Tecnologías utilizadas

### 🎨 Frontend

![React](https://img.shields.io/badge/React-2026?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-2026?style=for-the-badge\&logo=vite\&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-2026?style=for-the-badge\&logo=tailwindcss\&logoColor=06B6D4)

* **React** — desarrollo de la interfaz de usuario.
* **Vite** — herramienta de desarrollo y compilación.
* **Tailwind CSS** — estilos y diseño de la aplicación.
* **React Icons** — iconos utilizados en la interfaz.

### ⚙️ Backend

![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge\&logo=express\&logoColor=white)

* **Node.js** — entorno de ejecución de JavaScript.
* **Express** — framework utilizado para crear la API REST.
* **CORS** — permite la comunicación entre frontend y backend.
* **pg** — cliente de PostgreSQL para Node.js.

### 🗄️ Base de datos

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)

* **PostgreSQL 16** — almacenamiento persistente de las tareas.
* **init.sql** — script utilizado para crear automáticamente la tabla `tasks`.

### 🐳 Infraestructura

![Docker](https://img.shields.io/badge/Docker-28-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)

* **Docker** — contenedores para los servicios.
* **Docker Compose** — coordinación de frontend, backend y PostgreSQL.
* **Docker Volume** — persistencia de los datos de PostgreSQL.

---
## ✨ Funcionalidades
La aplicación permite:
* ➕ Crear tareas.
* 📋 Listar tareas.
* ✏️ Editar tareas.
* 🗑️ Eliminar tareas.
* ✅ Marcar tareas como completadas.
* 💾 Persistir las tareas en PostgreSQL.
* 🔄 Recuperar las tareas almacenadas al recargar la aplicación.
* 🐳 Ejecutar todo el proyecto mediante Docker.

---
## 📁 Estructura del proyecto
```text
task_manager/
│
├── 📂 backend/
│   ├── 🐳 Dockerfile
│   ├── 📄 db.js
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   └── 📄 server.js
│
├── 📂 frontend/
│   ├── 🐳 Dockerfile
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   ├── 📄 index.html
│   ├── 📄 vite.config.js
│   │
│   ├── 📂 public/
│   │
│   └── 📂 src/
│       ├── 📄 App.jsx
│       ├── 📄 index.css
│       ├── 📄 main.jsx
│       │
│       └── 📂 components/
│           ├── 📄 TaskCard.jsx
│           ├── 📄 TaskForm.jsx
│           └── 📄 TaskList.jsx
│
├── 📂 init-db/
│   └── 📄 init.sql
│
├── 🐳 docker-compose.yml
├── 📄 .gitignore
└── 📄 README.md
```

---
# 🚀 Instalación y ejecución

## 📋 Requisitos
Para ejecutar el proyecto únicamente es necesario tener instalado:
* 🐙 **Git**
* 🐳 **Docker**
* 🐳 **Docker Compose**

No es necesario instalar manualmente:
* Node.js
* npm
* PostgreSQL
Estos servicios se ejecutan dentro de los contenedores de Docker.

---
## 1️⃣ Clonar el repositorio
Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
```
Ingresar al proyecto:
```bash
cd task_manager
```

---
## 2️⃣ Levantar el proyecto
Ejecutar:
```bash
docker compose up --build
```
Este comando se encarga de:
1. 🐳 Construir la imagen del frontend.
2. 🐳 Construir la imagen del backend.
3. 🐘 Descargar PostgreSQL 16 si todavía no está disponible.
4. 🗄️ Crear la base de datos `task_manager`.
5. 📄 Ejecutar `init.sql` al inicializar PostgreSQL.
6. 🏗️ Crear automáticamente la tabla `tasks`.
7. ⚙️ Iniciar el backend.
8. 🎨 Iniciar el frontend.

---
## 3️⃣ Abrir la aplicación
Una vez que los contenedores estén funcionando, abrir:
👉 **http://localhost:5173**
El backend estará disponible en:
👉 **http://localhost:3001**
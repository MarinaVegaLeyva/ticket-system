# 🎟️ Sistema de Tickets de Soporte

Sistema sencillo de tickets de ayuda desarrollado con **React** y **Redux Toolkit**, que permite a los usuarios **reportar problemas** y **consultar sus reportes**, cumpliendo con los requerimientos de la prueba técnica Frontend.

---

## 📌 Descripción general

La aplicación cuenta con dos apartados principales:

- **Reportar un problema**: formulario para crear un ticket de soporte.
- **Mis reportes**: listado de los tickets creados, con paginación, visualización de detalle y eliminación.

La información se guarda de forma persistente usando **LocalStorage** y se gestiona el estado global con **Redux Toolkit**.

---

## 🧩 Funcionalidades

- Crear tickets con:
  - Asunto
  - Prioridad
  - Detalle
  - Archivo adjunto
- Listar tickets en una **tabla**
- Paginación del listado
- Ver detalle de un ticket
- Eliminar tickets
- Persistencia de datos en LocalStorage
- Separación clara de vistas y componentes
- Manejo de estado global con Redux Toolkit

---

## 🛠️ Tecnologías utilizadas

- React (Vite)
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- CSS (estilos por componente)
- LocalStorage

---

## 📂 Estructura del proyecto

📦src
 ┣ 📂app
 ┃ ┣ 📜hooks.js
 ┃ ┗ 📜store.js
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜TicketDetail.jsx
 ┃ ┣ 📜TicketForm.css
 ┃ ┣ 📜TicketForm.jsx
 ┃ ┣ 📜TicketList.css
 ┃ ┗ 📜TicketList.jsx
 ┣ 📂features
 ┃ ┣ 📂tickets
 ┃ ┃ ┣ 📜ticketsApi.js
 ┃ ┃ ┗ 📜ticketsSlice.js
 ┃ ┗ 📂users
 ┣ 📂pages
 ┃ ┣ 📜MyReports.jsx
 ┃ ┗ 📜ReportProblem.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
 
# 🚀 Instalación y ejecución del proyecto
1️⃣ Clonar el repositorio
git clone https://github.com/

2️⃣ Entrar al proyecto
cd ticket-system

3️⃣ Instalar dependencias
npm install

4️⃣ Ejecutar el proyecto en desarrollo
npm run dev

5️⃣ Abrir en el navegador
http://localhost:5173/

🧠 Decisiones técnicas

Se utilizó Redux Toolkit para centralizar el estado y facilitar la escalabilidad.

LocalStorage permite persistir la información sin un backend.

Separación entre vistas y componentes reutilizables.

Estilos manejados por componente para mejorar mantenibilidad.

No se usaron librerías UI externas para reducir complejidad y mantener claridad del código.

🔮 Posibles mejoras

Integración con backend real usando RTK Query

Autenticación de usuarios

Filtros y ordenamiento de tickets

Manejo de archivos en servidor

Uso de TypeScript

Pruebas unitarias

Mejor soporte responsive

👤 Autor

Marina Vega
Ingeniera en Sistemas / Frontend Developer
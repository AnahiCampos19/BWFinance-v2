# ByteWise

Proyecto de Aplicación Financiera Fullstack (React + Node.js/Express)

## Estructura del Proyecto

```
ByteWise-Front-React-full/
├── backend/      # API y lógica de servidor (Node.js/Express)
├── frontend/     # Aplicación web (React)
├── .gitignore
├── README.md
└── package.json  # (opcional, para scripts globales)
```

---

## Requisitos Previos

- Node.js (v16+ recomendado)
- npm (v8+ recomendado)

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/AnahiCampos19/BWFinance.git
   cd ByteWise-Front-React-full
   ```

2. **Instalar dependencias del frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Instalar dependencias del backend:**
   ```bash
   cd ../backend
   npm install
   ```

---

## Variables de Entorno

- Crea un archivo `.env` en `backend/` con tus variables de entorno (por ejemplo, conexión a base de datos, claves API, etc.).
- **Nunca subas tu .env al repositorio.**

---

## Levantar el Proyecto

### 1. Backend (API)
Desde la carpeta `backend/`:
```bash
npm run dev
```
o
```bash
npm start
```
- El backend suele correr en `http://localhost:5000` (verifica el puerto en tu código).

### 2. Frontend (React)
Desde la carpeta `frontend/`:
```bash
npm run dev
```
o
```bash
npm start
```
- El frontend suele correr en `http://localhost:3000` (verifica el puerto en tu código).

---

## Scripts Globales (opcional)

Puedes agregar un `package.json` en la raíz con scripts para levantar ambos servidores a la vez usando [concurrently](https://www.npmjs.com/package/concurrently):

```json
{
  "name": "bytewise-root",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^8.0.0"
  }
}
```
Luego instala las dependencias en la raíz:
```bash
npm install
```
Y ejecuta:
```bash
npm run dev
```

---

## Notas

- Asegúrate de que tu archivo `.gitignore` ignore correctamente `node_modules`, `.env`, archivos temporales, etc.
- Para subir cambios del backend, asegúrate de que los archivos no estén en `.gitignore` y que estés en la raíz del proyecto antes de hacer `git add .`.

---

## Contacto

Cualquier duda o sugerencia, contacta a [Anahi Campos](https://github.com/AnahiCampos19).

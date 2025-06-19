Here’s your **raw `.md` file** for the **Auth Backend API** documentation, written with proper Markdown formatting and embedded HTML elements for enhanced readability:

```markdown
<!-- README.md -->

<h1 align="center">🔐 Auth Backend API</h1>

<p align="center">
A TypeScript-based Express authentication backend built with MongoDB and Mongoose.<br/>
Features include JWT authentication, secure password hashing, Zod validation, and Docker support.
</p>

---

## 🚀 Features

- 🔐 JWT-based authentication
- 🔑 Secure password hashing with Bcrypt
- 🍪 Cookie-based session handling
- ⚙️ Environment-based config using `.env`
- 🧱 Modular MVC folder structure
- 🧪 Input validation using Zod
- 🟦 TypeScript support with hot-reloading (`ts-node-dev`)
- 🐳 Dockerized for easy deployment

---

## 🏗️ Project Structure


auth/
├── config/         # DB and environment configuration
├── controller/     # Route logic and controllers
├── dist/           # Compiled JS (after build)
├── middlewares/    # Custom Express middleware (auth, error, etc.)
├── models/         # Mongoose models
├── routes/         # API route definitions
├── schemas/        # Zod schemas for request validation
├── .env            # Environment variables (not committed)
├── Dockerfile      # For containerization
├── index.ts        # Entry point
├── package.json
├── tsconfig.json

---

## ⚙️ Setup & Installation

### 1. Clone the Repo

```bash
git clone https://github.com/manisprasad/auth-assignment.git

````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Use the `.env.example` as a template:

```bash
cp .env.example .env
```

Fill in the environment variables in `.env`:

```env
PORT=8080
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

```

---

## 📦 NPM Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start dev server with hot reload |
| `npm run build` | Compile TypeScript to `dist/`    |
| `npm start`     | Run compiled JS using Node.js    |

---

## 🐳 Docker Usage

### 🛠️ Build Docker Image

```bash
docker build -t auth-assignment .
```

### 🚀 Run Docker Container

```bash
docker run --env-file .env -p 8080:8080 auth-assignment
```

> ⚠️ Ensure `.env` is not listed in `.dockerignore` if you're using `--env-file`.

---

## ✅ API Endpoints (Examples)

Base URL: `http://localhost:8080`

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/api/register` | Register a new user       |
| POST   | `/api/login`    | Login and get JWT token   |
| GET    | `/api/profile`  | Fetch user profile (auth) |

---

## 🧪 Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB + Mongoose
* JWT (JSON Web Token)
* Zod (for validation)
* Docker

---

## 📁 .env.example

```env
port=8080
JWT_ACCESS_SECRET=jwt_Secret
JWT_REFRESH_SECRET=jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
MONGO_URI=mongodb_connection_url    
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙋‍♂️ Author

Made with ❤️ by **\Manish Prasad**

---

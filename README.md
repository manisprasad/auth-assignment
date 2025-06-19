
<!-- README.md -->

<h1 align="center">🔐 Auth Backend API</h1>

<p align="center">
A TypeScript-based Express.js authentication backend using MongoDB and Mongoose.<br/>
It features JWT authentication, secure password hashing, Zod validation, and Docker support.
</p>

---

## 🚀 Features

- 🔐 JWT-based authentication (Access & Refresh tokens)
- 🔑 Secure password hashing with Bcrypt
- 🍪 Cookie-based session handling
- ⚙️ Environment-based configuration via `.env`
- 🧱 Modular and scalable MVC folder structure
- ✅ Request validation with Zod
- 🟦 TypeScript support with hot-reloading (`ts-node-dev`)
- 🐳 Docker support for easy deployment

---

## 📁 Project Structure



auth/
├── config/         # Database and environment config
├── controller/     # Route logic and controllers
├── dist/           # Compiled JS files (after build)
├── middlewares/    # Express middleware (auth, error handling, etc.)
├── models/         # Mongoose schemas and models
├── routes/         # API route definitions
├── schemas/        # Zod validation schemas
├── .env            # Environment variables (not committed)
├── Dockerfile      # Docker configuration
├── index.ts        # Application entry point
├── package.json
├── tsconfig.json

````

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/manisprasad/auth-assignment.git
cd auth-assignment
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create and Configure `.env` File

Use the example file to create your `.env`:

```bash
cp .env.example .env
```

Fill in the required environment variables:

```env
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
JWT_ACCESS_SECRET=your_access_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

---

## 📦 NPM Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start development server        |
| `npm run build` | Compile TypeScript into `dist/` |
| `npm start`     | Run the compiled app with Node  |

---

## 🐳 Docker Support

### 🔧 Build Docker Image

```bash
docker build -t auth-assignment .
```

### 🚀 Run Docker Container

```bash
docker run --env-file .env -p 8080:8080 auth-assignment
```

> ⚠️ Make sure `.env` is *not* included in `.dockerignore` if you're using `--env-file`.

---

## 📌 Example API Endpoints

Base URL: `http://localhost:8080`

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| POST   | `/api/register` | Register a new user          |
| POST   | `/api/login`    | Login and receive JWT token  |
| GET    | `/api/profile`  | Get user profile (protected) |

---

## 🧪 Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB + Mongoose**
* **JWT (JSON Web Token)**
* **Zod (Validation)**
* **Docker**

---

## 📁 `.env.example`

```env
PORT=8080
MONGO_URI=mongodb_connection_url
JWT_ACCESS_SECRET=jwt_access_secret
JWT_REFRESH_SECRET=jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙋‍♂️ Author

Made with ❤️ by **[Manish Prasad](https://github.com/manisprasad)**

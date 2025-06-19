import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { corsOption } from './config/corsConfig';
import { loginRoute } from './routes/authRoute';
import { registerRoute } from './routes/registerRoute';
import { connectDB } from './config/dbConnect';

const PORT = process.env.PORT || 8080;
const app = express();

// --- MIDDLEWARES ---
// Enable CORS with credentials support
app.use(cors(corsOption));

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Parse cookies
app.use(cookieParser());

// Healthy example test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

connectDB().then(() => {
    //Main ROUTES
    app.use('/auth/login', loginRoute);
    app.use('/auth/register', registerRoute);

    // --- START SERVER ---
    app.listen(PORT, () => {
        const link = `\x1b[34mhttp://localhost:${PORT}\x1b[0m`;
        console.log(`Server is running on ${link}`);
    });

}).catch((err) => {
    console.error(" Failed to connect to database", err);
    process.exit(1); // Exit if DB connection fails
});



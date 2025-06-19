const allowedOrigins = ["http://localhost:5173"];
import { CorsOptions } from "cors";

export const corsOption:CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); 
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

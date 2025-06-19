import express from 'express';
import { validate } from "../middlewares/validate";
import { loginSchema } from '../schemas/userSchemas';
import { handleLogin } from '../controller/authController';

export const loginRoute = express.Router();

loginRoute.post('/', validate(loginSchema), handleLogin);
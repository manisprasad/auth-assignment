import express from 'express';
import { validate } from "../middlewares/validate";
import { signupSchema } from '../schemas/userSchemas';
import { handleRegister } from '../controller/registerRoute';

export const registerRoute = express.Router();

registerRoute.post('/', validate(signupSchema), handleRegister);
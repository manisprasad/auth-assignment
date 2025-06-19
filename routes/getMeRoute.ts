import express from 'express';
import { handleGetMe } from '../controller/getMe';
import verifyJWT from '../middlewares/verifyJwt';

export const getMeRoute = express.Router();

getMeRoute.get('/', verifyJWT, handleGetMe);

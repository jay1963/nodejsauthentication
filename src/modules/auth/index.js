import { Router } from 'express';
import * as authController from './auth-controller';
import AuthServices from './auth-sevices';

const routes = new Router();

routes.post('/register', authController.signup);
routes.post('/login', AuthServices.loginMiddleware, authController.login);

export default routes;

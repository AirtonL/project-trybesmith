import { Router } from 'express';

import validUserLogin from '../middlewares/users.login.middlewares';

import LoginController from '../controllers/login/login.controller';

const loginController = new LoginController();

const routerLogin = Router();

routerLogin.post('/login', validUserLogin, loginController.auth);

export default routerLogin;
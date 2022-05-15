import { Router } from 'express';

import validUserLogin from '../middlewares/users.login.middlewares';

import LoginController from '../controllers/login/login.controller';

const loginController = new LoginController();

const routerLogin: Router = Router();

routerLogin.post('/', validUserLogin, loginController.auth);

export default routerLogin;
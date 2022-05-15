import { Router } from 'express';

import UsersController from '../controllers/users/users.controller';

import userMiddleware from '../middlewares/users.middlewares';

const usersController = new UsersController();

const routerUser: Router = Router();

routerUser.post('/', userMiddleware, usersController.create);

export default routerUser;
import { Router } from 'express';

import OrdersController from '../controllers/orders/orders.controller';
import verify from '../middlewares/auth';
import validOrders from '../middlewares/orders.create.middlewares';

const ordersController = new OrdersController();

const routerOrders: Router = Router();

routerOrders.get('/', ordersController.getAll);

routerOrders.post('/', verify, validOrders, ordersController.create);

export default routerOrders;
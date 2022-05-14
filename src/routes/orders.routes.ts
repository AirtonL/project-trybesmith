import { Router } from 'express';

import OrdersController from '../controllers/orders/orders.controller';

const ordersController = new OrdersController();

const routerOrders = Router();

routerOrders.get('/orders', ordersController.getAll);

export default routerOrders;
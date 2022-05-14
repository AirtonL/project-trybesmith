import { Router } from 'express';
import routerProducts from './products.routes';
import routerUser from './users.routes';
import routerOrders from './orders.routes';

const router = Router();

router.use(routerProducts);

router.use(routerUser);

router.use(routerOrders);

export default router;
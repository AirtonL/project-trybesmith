import { Router } from 'express';
import routerProducts from './products.routes';
import routerUser from './users.routes';
import routerOrders from './orders.routes';
import routerLogin from './users.login.routes';

const router = Router();

router.use(routerProducts);

router.use(routerUser);

router.use(routerOrders);

router.use(routerLogin);

export default router;
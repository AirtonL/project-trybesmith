import { Router } from 'express';
import routerProducts from './products.routes';
import routerUser from './users.routes';
import routerOrders from './orders.routes';
import routerLogin from './users.login.routes';

const router: Router = Router();

router.use('/products', routerProducts);

router.use('/users', routerUser);

router.use('/orders', routerOrders);

router.use('/login', routerLogin);

export default router;
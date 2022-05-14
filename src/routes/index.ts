import { Router } from 'express';
import routerProducts from './products.routes';
import routerUser from './users.routes';

const router = Router();

router.use(routerProducts);

router.use(routerUser);

export default router;
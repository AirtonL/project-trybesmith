import { Router } from 'express';
import routerProducts from './products.routes';

const router = Router();

router.use(routerProducts);

export default router;
import { Router } from 'express';

import ProductsController from '../controllers/products/products.controller';

import productsMiddlewares from '../middlewares/products.middlewares';

const productsController = new ProductsController();

const routerProducts: Router = Router();

routerProducts.get('/', productsController.getAll);

routerProducts.post('/', productsMiddlewares, productsController.create);

export default routerProducts;
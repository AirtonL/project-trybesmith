import { Router } from 'express';

import ProductsController from '../controllers/products/products.controller';

import productsMiddlewares from '../middlewares/products.middlewares';

const productsController = new ProductsController();

const routerProducts = Router();

routerProducts.get('/products', productsController.getAll);

routerProducts.post('/products', productsMiddlewares, productsController.create);

export default routerProducts;
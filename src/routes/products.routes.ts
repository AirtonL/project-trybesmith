import { Router } from 'express';

import ProductsController from '../controllers/products/products.controller';

const productsController = new ProductsController();

const routerProducts = Router();

routerProducts.get('/products', productsController.getAll);

export default routerProducts;
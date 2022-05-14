import { Request, Response, NextFunction } from 'express';
import ProductsService from '../../services/products/products.service';

class ProductsController {
  constructor(public productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAll();

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, amount } = req.body;
      const products = await this.productsService.create({ name, amount });

      return res.status(201).json(products);
    } catch (error) {
      next(error);
    }
  };
}

export default ProductsController;

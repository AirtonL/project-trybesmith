import { Request, Response } from 'express';
import ProductsService from '../../services/products/products.service';

class ProductsController {
  constructor(public productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();

    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { name, amount } = req.body;
      const products = await this.productsService.create({ name, amount });

      res.status(201).json(products);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductsController;

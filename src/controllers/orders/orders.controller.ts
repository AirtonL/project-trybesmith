import { Request, Response, NextFunction } from 'express';
import OrdersServices from '../../services/orders/orders.service';

class OrdersController {
  constructor(public ordersService = new OrdersServices()) { }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.ordersService.getAll();

      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  };
}

export default OrdersController;

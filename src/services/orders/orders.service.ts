import connection from '../../models/connection';
import OrdersModel from '../../models/orders/orders.model';

import IServiceOrder from '../../interfaces/orders/ordersService.interface';
import IOrdersCreate from '../../interfaces/orders/orders.create.interface';
import IOrdersCreateReturn from '../../interfaces/orders/orders.create.return.interface';

class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IServiceOrder[]> {
    const orders = await this.model.getAll();

    return orders
      .map(({ id, userId, products }) => ({
        id,
        userId,
        productsIds: Array.from(products).map(Number),
      }));
  }

  public async create({ userId, productsIds }: IOrdersCreate): Promise<IOrdersCreateReturn> {
    return this.model.create({ userId, productsIds });
  }
}

export default OrdersServices;

import connection from '../../models/connection';
import OrdersModel from '../../models/orders/orders.model';
import IServiceOrder from '../../interfaces/ordersService.interface';

class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IServiceOrder[]> {
    const orders = await this.model.getAll();

    const result = orders
      .map(({ id, userId, products }) => ({
        id,
        userId,
        productsIds: Array.from(products).map(Number),
      }));

    return result;
  }
}

export default OrdersServices;
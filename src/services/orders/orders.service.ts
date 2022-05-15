import connection from '../../models/connection';
import OrdersModel from '../../models/orders/orders.model';
import IServiceOrder from '../../interfaces/ordersService.interface';
import IOrdersCreate from '../../interfaces/orders.create.interface';
import IOrdersCreateReturn from '../../interfaces/orders.create.return.interface';

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

  public async create({ userId, productsIds }: IOrdersCreate): Promise<IOrdersCreateReturn> {
    const ordersCreate = await this.model.create({ userId, productsIds });

    return ordersCreate;
  }
}

export default OrdersServices;
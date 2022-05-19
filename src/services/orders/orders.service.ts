import connection from '../../models/connection';
import OrdersModel from '../../models/orders/orders.model';

import IOrder from '../../interfaces/orders/orders.interface';
import IOrdersCreate from '../../interfaces/orders/orders.create.interface';
import IOrdersCreateReturn from '../../interfaces/orders/orders.create.return.interface';

class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    return this.model.getAll();
  }

  public async create({ userId, productsIds }: IOrdersCreate): Promise<IOrdersCreateReturn> {
    return this.model.create({ userId, productsIds });
  }
}

export default OrdersServices;

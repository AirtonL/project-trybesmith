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

    const result = orders.map(({ id, userId, products }) => {
      const productsIds = products.split(',')
        .map((product: string) => Number(product));
      // const teste = new Array(...productsIds);
      return { id, userId, productsIds };
    });
    console.log(result);

    return result;
  }
}

export default OrdersServices;
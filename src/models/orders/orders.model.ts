import { Pool } from 'mysql2/promise';
import IOrder from '../../interfaces/orders.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
  // https://stackoverflow.com/questions/2516545/mysql-group-concat  
    const [result] = await this.connection.execute(`
    SELECT 
      Orders.id,
      Orders.userId,
      GROUP_CONCAT(p.id) AS products
    FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products AS p
      ON FIND_IN_SET(Orders.id, p.orderId)
    GROUP BY Orders.id
    ORDER BY Orders.userId ASC`);

    return result as IOrder[];
  }
}

export default OrderModel;
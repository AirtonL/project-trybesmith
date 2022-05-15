import { Pool, ResultSetHeader } from 'mysql2/promise';

import IOrdersCreate from '../../interfaces/orders/orders.create.interface';
import IOrdersCreateReturn from '../../interfaces/orders/orders.create.return.interface';
import IOrder from '../../interfaces/orders/orders.interface';

class OrderModel {
  private connection: Pool;

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

  public async create({ userId, productsIds }: IOrdersCreate): Promise<IOrdersCreateReturn> {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    
    await this.connection.execute(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
      [id, id + 1],
    );

    return { id, userId, productsIds };
  }
}

export default OrderModel;
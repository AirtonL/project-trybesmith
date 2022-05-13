import { Pool } from 'mysql2/promise';
import IProducts from '../../interfaces/products.interface';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return rows as IProducts[];
  }
}

export default ProductsModel;
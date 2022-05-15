import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../../interfaces/products/products.interface';

class ProductsModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return rows as IProducts[];
  }

  public async create(products: IProducts): Promise<IProducts> {
    const { name, amount } = products;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
  
    return { id: insertId, ...products };
  }
}

export default ProductsModel;
import connection from '../../models/connection';
import ProductsModel from '../../models/products/products.model';
import IProducts from '../../interfaces/products.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductsService;
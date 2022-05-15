import connection from '../../models/connection';
import ProductsModel from '../../models/products/products.model';
import IProducts from '../../interfaces/products/products.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(products: IProducts): Promise<IProducts> {
    const result = await this.model.create(products);
    return result;
  }
}

export default ProductsService;
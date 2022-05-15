import connection from '../../models/connection';
import ProductsModel from '../../models/products/products.model';

import IProducts from '../../interfaces/products/products.interface';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    return this.model.getAll();
  }

  public async create(products: IProducts): Promise<IProducts> {
    return this.model.create(products);
  }
}

export default ProductsService;
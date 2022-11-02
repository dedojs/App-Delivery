const BaseService = require('./Base');
const ProductValidations = require('../validations/Products');

class ProductService extends BaseService {
  async read() {
    const allProducts = await this.repository.read();
    return allProducts;
  }

  async readOne(id) {
    ProductValidations.reqId(id);
    const product = await this.repository.readOne(id);
    ProductValidations.emptyProducts(product);
    return product;
  }

  //criar produtos
  async create(body) {
    const product = await this.repository.create(body);
    return product;
  }
}

module.exports = ProductService;

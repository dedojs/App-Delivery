const model = require('./database/models');

const UserRepository = require('./repository/User');
const ProductRepository = require('./repository/Product');
const SaleRepository = require('./repository/Sale');
const SaleProductRepository = require('./repository/SaleProduct');

const UserService = require('./services/User');
const UserController = require('./controllers/User');

const ProductService = require('./services/Product');
const ProductController = require('./controllers/Product');

const SaleService = require('./services/Sale');
const SaleController = require('./controllers/Sale');

class Factory {
  static user() {
    const userRepository = new UserRepository(model.User);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    return { userController, userService, userRepository };
  }

  static sale() {
    const saleRepository = new SaleRepository(model.Sale, model.Product);
    const saleProductRepository = new SaleProductRepository(model.SaleProduct);
    const productRepository = new ProductRepository(model.Product);
    const userRepository = new UserRepository(model.User);
    const saleService = new SaleService(
      saleRepository, saleProductRepository, productRepository, userRepository,
    );
    const saleController = new SaleController(saleService);
    return {
      saleController, saleService, saleRepository, saleProductRepository, productRepository,
    };
  }

  static product() {
    const productRepository = new ProductRepository(model.Product);
    const productService = new ProductService(productRepository);
    const productController = new ProductController(productService);
    return { productController, productService, productRepository };
  }
}

module.exports = Factory;

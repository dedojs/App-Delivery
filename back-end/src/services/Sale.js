const BaseService = require('./Base');
const SaleValidations = require('../validations/Sale');
const statusValidation = require('../helpers/statusValidation');
const { customerValidation, sellerAndAdminValidation } = require('../helpers/rolesValidation');
const { handleThrowError, httpStatusCode } = require('../helpers');

class SaleService extends BaseService {
  constructor(repository, saleProductRepo, productRepo, userRepo) {
    super(repository);
    this.saleProductRepo = saleProductRepo;
    this.productRepo = productRepo;
    this.userRepo = userRepo;
  }

  async read() {
    const allOrders = await this.repository.read();
    return allOrders;
  }

  async readByCustomerId(id) {
    SaleValidations.reqId(id);
    const orders = await this.repository.listByCustomerId(id);
    return orders;
  }

  async readBySellerId(id) {
    SaleValidations.reqId(id);
    const orders = await this.repository.listBySellerId(id);
    return orders;
  }

  async readOne(id) {
    SaleValidations.reqId(id);
    const order = await this.repository.readOne(id);
    SaleValidations.emptyOrder(order);
    return order;
  }

  async create(fullSale) {
    SaleValidations.reqSale(fullSale);
    const { products, ...sale } = fullSale;
    await SaleValidations.checkUser(sale.userId, this.userRepo);
    await SaleValidations.checkSeller(sale.sellerId, this.userRepo);
    await SaleValidations.checkProducts(products, this.productRepo);
    const createdSale = await this.repository.create(sale);
    const addedProducts = await this.saleProductRepo.createMany(products, createdSale.id);
    const formatedProducts = addedProducts.map(async (e) => {
      const { productId, ...rest } = e.get();
      const product = await this.productRepo.readOne(productId);
      return { ...rest, name: product.get().name, price: product.get().price };
    });
    return { ...createdSale.get(), products: await Promise.all(formatedProducts) };
  }

  async readWithProducts() {
    const sales = await this.repository.readWithProducts();
    return sales;
  }

  async readOneWithProducts(id) {
    const sale = await this.repository.readOneWithProducts(id);
    return sale;
  }

  async updateSaleStatus(id, status, role) {
    const checkedStatus = statusValidation(status);
    const checkedCustomer = customerValidation(role, checkedStatus);
    const checkedSellerOrAdmin = sellerAndAdminValidation(role, checkedStatus);
      
    if (checkedCustomer) {
      const update = await this.repository.updateSaleStatus(id, status);
      return update;
    }
      
    if (checkedSellerOrAdmin) {
      const update = await this.repository.updateSaleStatus(id, status);
      return update;
    }
    
    handleThrowError('Invalid credentials', httpStatusCode.BAD_REQUEST);
  }
}

module.exports = SaleService;

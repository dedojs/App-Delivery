const { httpStatusCode } = require('../helpers');
const BaseController = require('./Base');

class SaleController extends BaseController {
  constructor(service) {
    super(service);
    this.create = this.create.bind(this);
    this.readByCustomerId = this.readByCustomerId.bind(this);
    this.readBySellerId = this.readBySellerId.bind(this);
    this.readWithProducts = this.readWithProducts.bind(this);
    this.readOneWithProducts = this.readOneWithProducts.bind(this);
    this.updateSaleStatus = this.updateSaleStatus.bind(this);
  }

  async readWithProducts(_req, res) {
    const data = await this.service.readWithProducts();
    return res.status(httpStatusCode.OK).json(data);
  }

  async readOneWithProducts(req, res) {
    const order = await this.service.readOneWithProducts(req.params.id);
    return res.status(httpStatusCode.OK).json(order);
  }

  async readByCustomerId(req, res) {
    const orders = await this.service.readByCustomerId(req.params.id);
    return res.status(httpStatusCode.OK).json(orders);
  }

  async readBySellerId(req, res) {
    const orders = await this.service.readBySellerId(req.params.id);
    return res.status(httpStatusCode.OK).json(orders);
  }

  // req.body: { userId: number, sellerId: number, totalPrice: number, deliveryAddress: string, deliveryNumber: string, products: Array<{ productId: number, quantity: number }> }
  async create(req, res) {
    const data = await this.service.create(req.body);
    return res.status(httpStatusCode.CREATED).json(data);
  }

  async updateSaleStatus(req, res) {
    await this.service.updateSaleStatus(req.params.id, req.body.status, req.user.role);
    return res.status(httpStatusCode.NO_CONTENT).end();
  }
}

module.exports = SaleController;
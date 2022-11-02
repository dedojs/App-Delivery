const { handleThrowError, httpStatusCode, joi } = require('../helpers');

class SaleValidations {
  static reqId(id) {
    if (!id) handleThrowError('Id can\'t be empty', httpStatusCode.UNAUTHORIZED);
  }

  static reqSale(fullSale) {
    joi.sale.validateSale(fullSale);
  }

  static emptyOrder(orders) {
    console.log(orders);
    if (!orders || orders.length === 0) {
      handleThrowError('Id not found in database', httpStatusCode.NOT_FOUND);
    }
  }

  static async checkProducts(products, repository) {
    const productIds = products.map(({ productId }) => productId);
    const counted = await repository.coutByIds(productIds);
    if (counted !== productIds.length) { 
      handleThrowError(
        'One or more products don\'t exist in database',
        httpStatusCode.BAD_REQUEST,
      );
    }
  }

  static async checkUser(userId, repository) {
    const user = await repository.readOne(userId);
    if (!user) handleThrowError('User doesn\'t exist', httpStatusCode.NOT_FOUND);
    if (user.role !== 'customer') {
      handleThrowError('User\'s role isn\'t customer', httpStatusCode.BAD_REQUEST);
    }
  }

  static async checkSeller(sellerId, repository) {
    const user = await repository.readOne(sellerId);
    if (!user) handleThrowError('User doesn\'t exist', httpStatusCode.NOT_FOUND);
    if (user.role !== 'seller') {
      handleThrowError('User\'s role isn\'t seller', httpStatusCode.BAD_REQUEST);
    }
  }
}

module.exports = SaleValidations;
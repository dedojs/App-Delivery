const { handleThrowError, httpStatusCode } = require('../helpers');

class ProductValidations {
  static reqId(id) {
    if (!id) handleThrowError('Id can\'t be empty', httpStatusCode.UNAUTHORIZED);
  }

  static emptyProducts(products) {
    if (!products) {
      handleThrowError('Has no product in batabase', httpStatusCode.NOT_FOUND);
    }
  }
}

module.exports = ProductValidations;
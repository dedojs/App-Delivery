const { handleThrowError } = require('./errorHandler');
const { httpStatusCode } = require('./httpStatusCode');

const customerValidation = (role, checkedStatus) => {
  if (role === 'customer' && checkedStatus === 'Entregue') {
    return true;
  }
};

const sellerAndAdminValidation = (role, checkedStatus) => {
  if (role === 'seller' || role === 'administrator') {
    if (checkedStatus === 'Em Trânsito' || checkedStatus === 'Preparando') {
      return true;
    } 
    handleThrowError('Invalid permissions to change status', httpStatusCode.UNAUTHORIZED);
  }
};

module.exports = { 
  customerValidation,
  sellerAndAdminValidation,
};

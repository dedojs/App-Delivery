const { handleThrowError } = require('./errorHandler');
const httpStatusCode = require('./httpStatusCode');

const statusValidation = (status) => {
  console.log('STATUS >>>>>>>', status);
  if (status === 'Preparando' || status === 'Em Trânsito' || status === 'Entregue') {
    return status;
  }
  return handleThrowError('Invalid status', httpStatusCode.BAD_REQUEST);
};

module.exports = statusValidation;
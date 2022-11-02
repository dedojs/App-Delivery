const joi = require('joi');
const { handleThrowError } = require('../errorHandler');

const userId = joi.number().required().messages({
  'number.base': 'userId must be a number',
});

const sellerId = joi.number().required().messages({
  'number.base': 'sellerId must be a number',
});

const totalPrice = joi.number().required().messages({
  'number.base': 'totalPrice must be a number',
});

const deliveryAddress = joi.string().required().messages({
  'string.base': 'deliveryAddress must be a string',
});

const deliveryNumber = joi.string().required().messages({
  'string.base': 'deliveryNumber must be a string',
});

const productId = joi.number().required().messages({
  'number.base': 'productId must be a number',
});

const quantity = joi.number().required().messages({
  'number.base': 'quantity must be a number',
});

const products = joi.array().items(joi.object({ productId, quantity }));

const saleSchema = joi.object(
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products },
);

function joiHandler(value, statusCode, joiSchema) {
  const { error } = joiSchema.validate(value);
  if (error) handleThrowError(error.message, statusCode);
}

const validateSale = (value, statusCode) => joiHandler(value, statusCode, saleSchema);

module.exports = {
  validateSale,
};
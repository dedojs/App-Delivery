const express = require('express');
const Factory = require('../Factory');
const Auth = require('../middlewares/TokenAuth');

const SaleController = Factory.sale().saleController;

const saleRouter = express.Router();

saleRouter.get('/orders', SaleController.readWithProducts);
saleRouter.get('/orders/:id', SaleController.readOneWithProducts);
saleRouter.get('/customer/orders/:id', SaleController.readByCustomerId);
saleRouter.get('/seller/orders/:id', SaleController.readBySellerId);
saleRouter.post('/customer/checkout', Auth.customer, SaleController.create);
saleRouter.patch('/status/update/:id', Auth.getRole, SaleController.updateSaleStatus);

module.exports = saleRouter;

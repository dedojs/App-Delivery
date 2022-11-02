const express = require('express');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const imageRouter = require('./imageRouter');
const saleRouter = require('./saleRouter');

const route = express.Router();

route.use(userRouter);
route.use(saleRouter);
route.use('/images', imageRouter);
route.use(productRouter);

module.exports = route;
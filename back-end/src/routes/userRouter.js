const express = require('express');
const Factory = require('../Factory');
const Auth = require('../middlewares/TokenAuth');

const UserController = Factory.user().userController;

const userRouter = express.Router();

userRouter.get('/user/get-all', UserController.read);
userRouter.post('/login', UserController.login);
userRouter.post('/register', UserController.create);
userRouter.post('/admin/register', Auth.admin, UserController.adminCreate);
userRouter.delete('/admin/delete/:id', Auth.admin, UserController.delete);
userRouter.delete('/user/delete/:id', UserController.delete);

module.exports = userRouter;

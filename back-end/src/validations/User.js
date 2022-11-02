const md5 = require('md5');
const { httpStatusCode, handleThrowError, joi } = require('../helpers');

class UserValidations {
  static checkLogin(login, user) {
    if (!user) handleThrowError('User not found', httpStatusCode.NOT_FOUND);
    const isValid = user.password === md5(login.password);
    if (!isValid) handleThrowError('Incorrect email or password', httpStatusCode.UNAUTHORIZED);
  }

  static reqLogin(login) {
    joi.user.validateLoginJoi(login, httpStatusCode.UNAUTHORIZED);
  }

  static reqUser(user) {
    joi.user.validateUserJoi(user, httpStatusCode.UNAUTHORIZED);
  }

  static checkIfCreated(data) {
    if (!data.created) handleThrowError('User already exists', httpStatusCode.CONFLICT);
  }
}

module.exports = UserValidations;
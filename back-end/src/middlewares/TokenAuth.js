const jwt = require('jsonwebtoken');
const fs = require('fs');
const { handleThrowError, httpStatusCode } = require('../helpers');

const SECRET = fs.readFileSync('./jwt.evaluation.key');

class Auth {
  static customer(req, _res, next) {
    const user = Auth.jwtToken(req.headers.authorization);
    if (user.role !== 'customer') {
      handleThrowError('Role must be customer', httpStatusCode.UNAUTHORIZED);
    }
    req.user = { ...user };
    next();
  }

  static getRole(req, _res, next) {
    const user = Auth.jwtToken(req.headers.authorization);    
    req.user = { ...user };
    next();
  }

  static admin(req, _res, next) {
    const user = Auth.jwtToken(req.headers.authorization);
    if (user.role !== 'administrator') {
      handleThrowError('Role must be administrator', httpStatusCode.UNAUTHORIZED);
    }
    req.user = { ...user };
    next();
  }

  static jwtToken(authorization) {
    if (!authorization) {
      handleThrowError('Token not found', httpStatusCode.UNAUTHORIZED);
    }

    try {
      return jwt.verify(authorization, SECRET);
    } catch (error) {
      console.log('JWT Auth ===>', error);
      handleThrowError('Expired or invalid token', httpStatusCode.UNAUTHORIZED);
    }
  }
}

module.exports = Auth;
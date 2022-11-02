const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('./jwt.evaluation.key');

module.exports = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};
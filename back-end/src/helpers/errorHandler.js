class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

function handleThrowError(message, status) {
  throw new CustomError(message, status);
}

module.exports = { handleThrowError, CustomError };
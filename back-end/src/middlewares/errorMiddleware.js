module.exports = (error, _req, res, _next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({ message: error.message || 'Internal server error' });
};
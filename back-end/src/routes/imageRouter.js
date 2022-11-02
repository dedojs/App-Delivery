const express = require('express');
const path = require('path');

const imageRouter = express.Router();

imageRouter.route('/:fileName')
  .get((req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, `../assets/images/${fileName}`);
  res.sendFile(filePath);
});

module.exports = imageRouter;
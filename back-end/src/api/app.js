const express = require('express');
require('express-async-errors');
const cors = require('cors');

const errorMiddleware = require('../middlewares/errorMiddleware');

const Router = require('../routes/router');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/test', (_req, res) => res.status(200).json('testeeeee'));

app.use(Router);
app.use(errorMiddleware);

// app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

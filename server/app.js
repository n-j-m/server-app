'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

// Middleware config
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app routing
app.use(require('./routes/api'));

if (process.env.NODE_ENV !== 'production') {
  app.use((err, req, res, next) => {
    const error = {
      status: err.status || 500,
      message: err.message,
      error: err.stack
    };

    res.status(error.status).json(error);
  });
}

app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message
  };
  res.status(error.status).json(error);
})

module.exports = app;
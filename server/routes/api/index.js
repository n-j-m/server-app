'use strict';

const apiRouter = require('express').Router();
const expressJWT = require('express-jwt');

const unprotectedPaths = require('../../config/unprotectedPaths');

apiRouter.use(
  expressJWT({
    secret: process.env.JWT_SECRET,
    requestProperty: 'token'
  })
  .unless({ path: unprotectedPaths() })
);

apiRouter.use('/api', require('./auth'), require('./users'));

module.exports = apiRouter;
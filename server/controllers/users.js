'use strict';

const User = require('../models').model('User');

const AuthController = require('./auth');

function createUser(req, res, next) {
  const user = new User(req.body);
  user.save()
    .then(user => {
      AuthController.authorize(req, res, next);
    })
    .catch(next);
}

function me(req, res, next) {
  const token = req.token;

  User.forge({id: token.id}).fetch()
    .then(user => res.json(user.toJSON()))
    .catch(next);
}

module.exports = {
  createUser,
  me
};
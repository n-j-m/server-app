'use strict';

const jwt = require('jsonwebtoken');

const User = require('../models').model('User');

function unauthedError(res) {
  res.status(401).json({ status: 401, message: "Unauthorized" });
}

function authorize(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.verify({email, password})
    .then(user => {
      const userData = user.toJSON();
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 5 * 60 * 60 });
      res.json({ token });
    })
    .catch(next);
}

module.exports = {
  authorize
};
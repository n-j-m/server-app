'use strict';

const bookshelf = require('./bookshelf');

const encryptPassword = require('../utils/encryptPassword');
const createSalt = require('../utils/createSalt');

function onSaving(model, attrs, options) {
  if (model.isNew()) {
    const password = model.get('password');
    return encryptPassword(password, createSalt(128))
      .then(encryptedPassword => {
        model.set('password', encryptedPassword);
        return model;
      });
  }

  return Promise.resolve(model);
}

const User = bookshelf.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,

  initialize() {
    this.on('saving', onSaving);
  }
}, {
  verify(credentials) {
    const email = credentials.email;
    const password = credentials.password;

    return User.forge({ email }).fetch()
      .then(user => {
        const userPassword = user.get('password');
        const salt = userPassword.substr(0, userPassword.indexOf('=') + 1);
        return encryptPassword(password, salt)
          .then(encryptedPassword => {
            if (encryptedPassword === userPassword) {
              return user;
            }
            return Promise.reject(new Error('Invalid Credentials'));
          });
      });
  }
});

module.exports = User;
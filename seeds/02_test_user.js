'use strict';

const encryptPassword = require('../server/utils/encryptPassword');
const createSalt = require('../server/utils/createSalt');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => encryptPassword('idontcare', createSalt(128)))
    .then(password => knex('users').insert({
      id: 1,
      email: 'jimmy@crackcorn.com',
      password
    }));
};

'use strict';

exports.seed = function(knex, Promise) {
  return knex('users').truncate();
};

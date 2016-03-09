'use strict';

const usersTable = (t) => {
  t.increments().primary();
  t.string('email').unique();
  t.string('password');
  t.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', usersTable);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users', usersTable);
};

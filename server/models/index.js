'use strict';

const bookshelf = require('./bookshelf');

bookshelf.model('User', require('./user'));

module.exports = bookshelf;
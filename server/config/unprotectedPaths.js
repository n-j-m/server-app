'use strict';

function unprotectedPaths() {
  return [
    '/',
    '/api/auth',
    '/api/users'
  ];
}

module.exports = unprotectedPaths;
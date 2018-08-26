const express = require('express');
const content = require('../routes/content');
const home = require('../routes/home');

module.exports = function routes(app) {
  app.use(express.json());
  app.use('/', home);
  app.use('/contents', content);
};

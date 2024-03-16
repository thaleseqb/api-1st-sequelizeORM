const express = require('express');
// if u are picking an index.js file it's not necessary passig the complete path.
const routes = require('./routes');

const app = express();
routes(app);

module.exports = app;

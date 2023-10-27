//import framework
const express = require('express');
const app = express();

// import modules
const router = require('./router');

app.use(express.json());
app.use(router);

//export module
module.exports = app;
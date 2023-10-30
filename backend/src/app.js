//import framework
const express = require('express');
const app = express();

// import modules
const router = require('./router');

app.use(express.json()); // habilita a api lidar com JSON
app.use(router);

//export module
module.exports = app;
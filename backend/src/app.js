//import framework
const express = require('express');
const cors = require('cors')
const app = express();

// import modules
const router = require('./router');

app.use(express.json()); // habilita a api para  lidar com JSON
app.use(cors());
app.use(router);

//export module
module.exports = app;
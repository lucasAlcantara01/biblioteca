// import Framework
const express = require('express');

//import modules
const booksController = require('./controllers/bookController');

const router = express.Router();  

router.get('/livros', booksController.getAllBooks);

//export module
module.exports = router
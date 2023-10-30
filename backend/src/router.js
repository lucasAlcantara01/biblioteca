// import Framework
const express = require('express');

//import modules
const router = express.Router();  
    //controller
        const booksController = require('./controllers/bookController');
        const usersController = require('./controllers/userControllers')
    //middlewares
        const booksMiddlewares = require('./middlewares/booksMiddlewares');

// routers 
    //livros
    router.get('/livros', booksController.getAllBooks);
    router.post('/livros', booksMiddlewares.validateFieldTitulo,  booksController.addBook);
    router.delete('/livros/:id', booksController.deleteBook);
    router.put('/livros/:id', booksMiddlewares.validateFieldTitulo, booksMiddlewares.validateFieldAutor, booksController.updateBook);
    //membros
    router.get('/membros', usersController.getAllUsers);
    router.post('/membros', usersController.addUser);
    router.delete('/membros/:id', usersController.deleteUser);
    router.put('/membros/:id', usersController.updateUser);

//export module
module.exports = router
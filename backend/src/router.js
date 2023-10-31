// import Framework
const express = require('express');

//import modules
const router = express.Router();  
    //controller
        const booksController = require('./controllers/bookController');
        const usersController = require('./controllers/userControllers')
    //middlewares
        const booksMiddlewares = require('./middlewares/booksMiddlewares');
        const usersMiddlewares = require('./middlewares/usersMiddlewares');

// routers 
    //livros
    router.get('/livros', booksController.getAllBooks);
    
    router.post('/livros', 
        booksMiddlewares.validateFieldTitulo,
        booksMiddlewares.validateFieldAutor,
        booksMiddlewares.validateFieldIsbn,
        booksMiddlewares.validateFieldAno,
        booksMiddlewares.validateFieldGenero,
        booksController.addBook,
    );
    router.delete('/livros/:id', booksController.deleteBook);

    router.put('/livros/:id', 
        booksMiddlewares.validateFieldTitulo, 
        booksMiddlewares.validateFieldAutor, 
        booksMiddlewares.validateFieldIsbn,
        booksMiddlewares.validateFieldAno,
        booksMiddlewares.validateFieldGenero,
        booksController.updateBook
    );
    //membros
    router.get('/membros', usersController.getAllUsers);

    router.post('/membros', 
        usersMiddlewares.validateFieldNome,
        usersMiddlewares.validateFieldEndereco,
        usersMiddlewares.validateFieldEmail,
        usersMiddlewares.validateFieldTelefone,
        usersController.addUser
    );

    router.delete('/membros/:id', usersController.deleteUser);

    router.put('/membros/:id',
        usersMiddlewares.validateFieldNome,
        usersMiddlewares.validateFieldEndereco,
        usersMiddlewares.validateFieldEmail,
        usersMiddlewares.validateFieldTelefone,
        usersController.updateUser
        );

//export module
module.exports = router
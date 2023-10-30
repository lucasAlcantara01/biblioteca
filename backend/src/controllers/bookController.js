const booksModels = require('../models/booksModels')

const getAllBooks = async (req, res) => {
    const books = await booksModels.getAllBooks();
    return res.status(200).json(books);
};

const addBook = async (req, res) => {
    const addBook = await booksModels.addBook(req.body);
    return res.status(201).json(addBook)
};


const deleteBook = async (req, res) => {
    const { id } = req.params;

    await booksModels.deleteBook(id);
    return res.status(204).json();
}

const updateBook = async (req, res) => {
    const { id } = req.params;

    await booksModels.updateBook(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
}

const booksModels = require('../models/booksModels')

const getAllBooks = async (req, res) => {
    const books = await booksModels.getAllBooks();
    return res.status(200).json(books);
};

const addBook = async (req, res) => {
    const addBook = await booksModels.addBook(req.body);
    return res.status(201).json(addBook)
};

module.exports = {
    getAllBooks,
    addBook,
}

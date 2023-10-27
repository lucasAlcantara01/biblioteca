const booksModels = require('../models/booksModels')

const getAllBooks = async (req, res) => {

    const books = await booksModels.getAllBooks();

    return res.status(200).json(books);
};

module.exports = {
    getAllBooks,
}
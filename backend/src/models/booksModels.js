// import modules
const connection = require('./connection');


//functions
const getAllBooks = async () => {
    const books = await connection.execute('SELECT * FROM livros'); // execute espera uma query sql 
    return books;
};

// exports modules
module.exports = {
    getAllBooks,
};
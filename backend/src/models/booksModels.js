// import modules
const connection = require('./connection');

//functions
const getAllBooks = async () => {
    const [books] = await connection.execute('SELECT * FROM livros'); // execute espera uma query sql 
    return books;
};

const addBook = async (book) => {
    const {titulo, autor, ano_de_publicacao, genero, exemplares_disponiveis} = book

    const query = 'INSERT INTO livros(titulo, autor, isbn, ano_de_publicacao, genero, exemplares_disponiveis) VALUES (?, ?, ?, ?, ?, ?)'
    
    const [addBook] = await connection.execute(query, [titulo, autor, ano_de_publicacao, genero, exemplares_disponiveis])
    
    return {insertId: addBook.insertId};
};

// exports modules
module.exports = {
    getAllBooks,
    addBook,
};
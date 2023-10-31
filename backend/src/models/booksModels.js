// import modules
const connection = require('./connection');

//functions
const getAllBooks = async () => {
    const [books] = await connection.execute('SELECT * FROM livros'); // execute espera uma query sql 
    return books;
};

const addBook = async (book) => {
    const {titulo, autor, isbn, ano_de_publicacao, genero} = book

    const query = 'INSERT INTO livros(titulo, autor, isbn, ano_de_publicacao, genero) VALUES (?, ?, ?, ?, ?)'
    
    const [addBook] = await connection.execute(query, [titulo, autor, isbn, ano_de_publicacao, genero])
    
    return {insertId: addBook.insertId}; // retorna apenas o id
};

const deleteBook = async (id) => {
    const [removedBook] = await connection.execute('DELETE FROM livros WHERE id = ?', [id])
    return removedBook
}

const updateBook = async (id, book) => {

    const {titulo, autor, isbn, ano_de_publicacao, genero, exemplares_disponiveis} = book

    const query = 'UPDATE livros SET titulo = ?, autor = ?, isbn = ?, ano_de_publicacao = ?, genero = ?, exemplares_disponiveis = ? WHERE id = ?'
    
    const [updatedBook] = await connection.execute(query, [titulo, autor, isbn, ano_de_publicacao, genero, exemplares_disponiveis, id] );
    return updatedBook;
}

// exports modules
module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
};
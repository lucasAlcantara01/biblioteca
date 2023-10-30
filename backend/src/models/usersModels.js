// import modules
const connection = require('./connection');

//functions

const getAllUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM membros');
    return users;
}

const addUser = async (user) => {
    const {nome, endereco, email, telefone} = user;
    
    const query = 'INSERT INTO membros (nome, endereco, email, telefone) VALUE(?, ?, ?, ?)';

    const [addUser] = await connection.execute(query, [nome, endereco, email, telefone]);

    return {insertID: addUser.insertId};
}

const deleteUser = async (id) => {
    const [deletedUser] = await connection.execute('DELETE FROM membros where id = ?', [id]);
    return deleteUser;
}

const updateUser = async (id, user) => {
    const {nome, endereco, email, telefone} = user;

    const query = 'UPDATE membros SET nome = ?, endereco = ?, email = ?, telefone = ? WHERE id = ? '

    const [updatedUser] = await connection.execute(query, [nome, endereco, email, telefone, id])
    return updateUser;
}

// exports modules
module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
};
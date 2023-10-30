const userModels = require('../models/usersModels')

const getAllUsers = async (req, res) => {
    const users = await userModels.getAllUsers();
    return res.status(200).json(users);
};

const addUser = async (req, res) => {
    const addUser = await userModels.addUser(req.body);
    return res.status(200).json(addUser)
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    await userModels.deleteUser(id);
    return res.status(200).json();
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    await userModels.updateUser(id, req.body)
    return res.status(204).json();
}


module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser,
}

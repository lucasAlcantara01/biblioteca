const validateFieldNome = (req, res, next) => {
    const {body} = req;

    if (body.nome === undefined) {
        return res.status(400).json({message: 'The field "nome" is required'})
    }

    if (body.nome === '') {
        return res.status(400).json({message: 'nome cannot be empty'})
    }

    next();
};

const validateFieldEndereco = (req, res, next) => {
    const {body} = req;

    if (body.endereco === undefined) {
        return res.status(400).json({message: 'The field "endereco" is required'})
    }

    if (body.endereco === '') {
        return res.status(400).json({message: 'endereco cannot be empty'})
    }

    next();
};

const validateFieldEmail = (req, res, next) => {
    const {body} = req;

    if (body.email === undefined) {
        return res.status(400).json({message: 'The field "email" is required'})
    }

    if (body.email === '') {
        return res.status(400).json({message: 'email cannot be empty'})
    }

    next();
};

const validateFieldTelefone = (req, res, next) => {
    const {body} = req;

    if (body.telefone === undefined) {
        return res.status(400).json({message: 'The field "telefone" is required'})
    }

    if (body.telefone === '') {
        return res.status(400).json({message: 'telefone cannot be empty'})
    }

    next();
};

module.exports = {
    validateFieldNome,
    validateFieldEndereco,
    validateFieldEmail,
    validateFieldTelefone
}
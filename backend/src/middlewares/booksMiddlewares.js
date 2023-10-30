const validateFieldTitulo = (req, res, next) => {
    const {body} = req;

    if (body.titulo === undefined) {
        return res.status(400).json({message: 'The field "titulo" is required'})
    }

    if (body.titulo === '') {
        return res.status(400).json({message: 'Title cannot be empty'})
    }

    next();
};

const validateFieldAutor = (req, res, next) => {
    const {body} = req;

    if (body.autor === undefined) {
        return res.status(400).json({message: 'The field "autor" is required'})
    }

    if (body.autor === '') {
        return res.status(400).json({message: 'Autor cannot be empty'})
    }

    next();
};

module.exports = {
    validateFieldTitulo,
    validateFieldAutor,
}
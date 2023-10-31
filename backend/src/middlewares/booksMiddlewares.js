const validateFieldTitulo = (req, res, next) => {
    const {body} = req;

    if (body.titulo === undefined) {
        return res.status(400).json({message: 'The field "titulo" is required'})
    }

    if (body.titulo === '') {
        return res.status(400).json({message: 'Titulo cannot be empty'})
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

const validateFieldIsbn = (req, res, next) => {
    const {body} = req;

    if (body.isbn === undefined) {
        return res.status(400).json({message: 'The field "isbn" is required'})
    }

    if (body.isbn === '') {
        return res.status(400).json({message: 'isbn cannot be empty'})
    }

    next();
};

const validateFieldAno = (req, res, next) => {
    const {body} = req;

    if (body.ano_de_publicacao === undefined) {
        return res.status(400).json({message: 'The field "ano_de_publicacao" is required'})
    }

    if (body.ano_de_publicacao === '') {
        return res.status(400).json({message: 'ano_de_publicacao cannot be empty'})
    }

    next();
};

const validateFieldGenero = (req, res, next) => {
    const {body} = req;

    if (body.genero === undefined) {
        return res.status(400).json({message: 'The field "genero" is required'})
    }

    if (body.genero === '') {
        return res.status(400).json({message: 'genro cannot be empty'})
    }

    next();
};



module.exports = {
    validateFieldTitulo,
    validateFieldAutor,
    validateFieldIsbn,
    validateFieldAno,
    validateFieldGenero
}
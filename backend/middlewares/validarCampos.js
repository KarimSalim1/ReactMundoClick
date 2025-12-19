const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    
    // 1. Obtener los errores que express-validator haya detectado en la ruta
    const errors = validationResult(req);

    // 2. Si hay errores, responder con un 400 (Bad Request)
    if ( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    // 3. Si no hay errores, continuar con el siguiente middleware o controlador
    next();
}

module.exports = {
    validarCampos
}
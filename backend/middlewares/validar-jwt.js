const { request, response } = require('express');

const jwt = require('jsonwebtoken'); // Corregido: llevaba comillas
const Usuario = require('../models/usuario'); // Corregido: faltaba una /

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');

    // 1. Verificar si viene el token en el header
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        // 2. Verificar el token y extraer el UID
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        // 3. Leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        // 4. Validar si el usuario existe en la DB
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe'
            });
        }

        // 5. Verificar si el usuario está activo (estado: true)
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario inactivo'
            });
        }

        // 6. Guardar el usuario en el objeto request para que los siguientes middlewares lo usen
        req.usuario = usuario;

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
}

module.exports = {
    validarJWT
}
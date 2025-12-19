const { request, response } = require('express'); // Corregido: request y response
const bcryptjs = require('bcryptjs'); // Corregido: nombre estándar de la librería

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req = request, res = response) => {
    const { correo, password } = req.body;

    try {
        // 1. Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // 2. SI el usuario está activo (estado: true)
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // 3. Verificar la contraseña
        // bcryptjs.compareSync compara el texto plano con la encriptada en la DB
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // 4. Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            msg: "Login ok",
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    login
}
const Rol = require('../models/rol');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') => {
    const existeRol = await Rol.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la base de datos`);
    }
}

// Validar si el email ya existe
const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

// Validar si el usuario existe por ID
const existeUsuario = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no correspond a ningún usurio registrado`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuario
}
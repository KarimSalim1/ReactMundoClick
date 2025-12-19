const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');


// 1. OBTENER TODOS LOS USUARIOS (PAGINADOS)
const usuarioGet = async (req = request, res = response) => {
    const { desde = 0, limite = 5 } = req.query;
    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        mensaje: 'Usuarios obtenidos',
        total,
        usuarios
    });
}

// 2. OBTENER UN USUARIO POR ID
const usuarioGetId = async (req = request, res = response) => {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    res.json({
        mensaje: 'Usuario obtenido',
        usuario
    });
}

// 3. CREAR UN NUEVO USUARIO
const usuarioPost = async (req = request, res = response) => {
    // recibir cuerpo peticion 
    const datos = req.body;

    const { nombre, apellido, correo, password, rol } = datos;
    const usuario = new Usuario({ nombre, apellido, correo, password, rol });

    // encriptar contrasena 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    usuario.password = hash;
    // guardar datos en la base de datos
    await usuario.save();

    res.json({
        mensaje: 'usuario cargado correctamente',
        usuario
    });
}



//4. ACTUALIZAR USUARIO
const usuarioPut = async (req = request, res = response) => {
    const { id } = req.params;
    const {password, correo, ...resto } = req.body;

    if(password){
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync(password, salt)
    }
//modificacion datos
        resto.correo = correo;

    
    const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });

    res.json({
        mensaje: 'Usuario actualizado correctamente',
        usuario
    });
}



// ELIMINAR USUARIO (BORRADO LÓGICO)
const usuarioDelete = async (req = request, res = response) => {
    const { id } = req.params;

    // 1. Buscar al usuario
    const usuario = await Usuario.findById(id);

    // 2. Validar si existe y si ya está deshabilitado
    // Usamos el signo ! para verificar si es null o si estado es false
    if ( !usuario || !usuario.estado ) {
        return res.status(404).json({
            mensaje: 'El usuario no existe o ya ha sido eliminado'
        });
    }

    // 3. Ejecutar el borrado lógico (Cambio de estado)
    const usuarioInhabilitado = await Usuario.findByIdAndUpdate(id, { estado: false }, { new: true });

    // 4. Respuesta corregida
    res.json({
        mensaje: 'Usuario inhabilitado correctamente',
        usuario: usuarioInhabilitado // Usamos la variable correcta
    });
}

// EXPORTACIONES
module.exports = {
    usuarioGet,
    usuarioGetId,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}
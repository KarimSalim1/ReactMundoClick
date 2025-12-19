const { request, response } = require('express');

const esAdminRole = (req = request, res = response, next) => {

    // 1. Verificar que el usuario exista (esto lo debe hacer el middleware de JWT antes)
    if ( !req.usuario ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }

    // 2. Extraer datos del usuario que pusimos en el request durante la validación del JWT
    const { rol, nombre, apellido } = req.usuario;

    // 3. Validar si es Administrador
    // Nota: Asegúrate de que en tu DB el rol sea 'ADMIN_ROLE' o 'Admin' exactamente
    if ( rol !== 'ADMIN_ROLE' ) {
        return res.status(401).json({
            msg: `${nombre} ${apellido} no es administrador - No puede hacer esto`
        });
    }

    next(); // Si es admin, puede pasar al controlador
}

module.exports = {
    esAdminRole
}
const { Router } = require('express');
const { check } = require('express-validator'); 
const { usuarioGet, usuarioGetId, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');
const { validarCampos } = require('../middlewares/validarCampos');

// CORRECCIÓN: Usar los nombres exactos que exportaste en el helper
const { esRolValido, emailExiste, existeUsuario } = require('../helpers/db-validators');

const router = Router();

router.get('/', [validarJWT, esAdminRole, validarCampos], usuarioGet);

router.get('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom( existeUsuario ), // Cambiado: usuarioExiste -> existeUsuario
    validarCampos
], usuarioGetId);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRolValido ), // Agregado: para validar el rol contra la DB
    check('password', 'El password debe tener más de 6 letras').isLength({ min: 6 }),
    validarCampos
], usuarioPost);

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuario ), // Cambiado: usuarioExiste -> existeUsuario
    validarCampos
], usuarioPut);

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuario ), // Agregado: para validar que el ID existe antes de borrar
    validarCampos
], usuarioDelete);

module.exports = router;

const jwt = require('jsonwebtoken');

const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        // El payload es la información que viajará dentro del token
        // Solo guardamos el UID por seguridad (no guardar contraseñas aquí)
        const payload = { uid };

        // Firmar el token
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h' // El token durará 4 horas
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' );
            } else {
                resolve( token );
            }
        });
    });
}

module.exports = {
    generarJWT
}
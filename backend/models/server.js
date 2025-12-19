const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.authPath = '/api/auth'
        this.usuariosPath = '/api/usuarios';
        //CONECTAR CON BASE DE DATOS
        this.connectarDB();

        //middlewares
        this.middlewares();

        //RUTAS
        this.routes();
    }
    async connectarDB() {
        await dbConnection();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //Leer lo que el usuario envia por frontend
        this.app.use(express.json());

        //definir carpeta publica
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    listen() {
        this.app.listen(this.port, ()=> {
            console.log('Server online port: ',this.port);
        })

    }
};

module.exports = Server;
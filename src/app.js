import {envs} from './config/env.js'
import {startServer} from './server/server.js'
//formar sin modules, osea sin typescrip
//const { envs } = require('./config/env')
//const {startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}
//Funcion agnostica autoconvocada
//Agostica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis

(async() => {
    main()
})()
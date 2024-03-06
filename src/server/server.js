//const express = require('express')
//const path = require('path')
import express from 'express'
import path from 'path'

export const startServer = (options) =>{
    const{port, public_path = 'public'} = options
    const app = express()
    //Para poder usar middlewares se usa .use (express) 
    app.use(express.static(public_path))//contenido estatico que ponemos disponible
    //recibir una peticion, por eso usamos  .get
    //esto hace que siempre redirija al index.html
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../${public_path}/index.html`)
        res.sendFile(indexPath)

    })
    //.listen abre un puerto y se queda escuchando
    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}


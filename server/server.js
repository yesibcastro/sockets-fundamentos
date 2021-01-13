const express = require('express');
const socketIO = require('socket.io');
//socket no trabaja directamente con la aplicacion de express, pero si trabaja con 
//un servidor HTTP que trae por defecto NODE
const http = require('http');
const path = require('path');
const { callbackify } = require('util');

const app = express();
//Definicion de servidor para correr la aplicacion 
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
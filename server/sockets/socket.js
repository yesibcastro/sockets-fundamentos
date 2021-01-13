const { io } = require('../server');

//verificar cuando se realice una conexion
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente, 
    //callback --> para confirmacion del usuario
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //broadcast es para enviar respuestas a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);
        //callback();
        /* if (mensaje.usuario) {
             callback({
                 resp: 'TODO SALIO BIEN'
             });
         } else {
             callback({
                 resp: 'TODO SALIO MAL'
             });
         };*/
    });
});
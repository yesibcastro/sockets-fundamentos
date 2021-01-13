var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Los on son para escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Los emits son para enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'Yesika',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server:', resp)
});

//Escuchar informacion del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});
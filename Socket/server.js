var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));
var io = socket(server);

console.log("My socket server is running");

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new connection ' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        console.log(data);
        socket.broadcast.emit('mouse', data); // sends to all but the sender
        // io.sockets.emit('mouse', data); // sends to everybody     
    }
}


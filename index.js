const express = require('express');
const socket = require('socket.io');
const app = express();

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
    console.log('port 4000 active')
});

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function(socket){
    console.log('success');

    socket.on('messageSent', function(data){
        io.sockets.emit('messageSent', data);
        console.log(data);
    });

    socket.on('messageTyping', function(data){
        socket.broadcast.emit('messageTyping', data)
    });

});


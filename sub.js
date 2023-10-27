import http from 'http';
import {Server} from 'socket.io';

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket)=> {
    console.log("um usuario conectou");

    socket.on('disconnect', ()=> {
        console.log('user disconnected');
    })

    socket.on('chat', (msg) =>{
        console.log(msg);
        socket.broadcast.emit('chat', msg);
    })
})

server.listen(3000, console.log("Servidor rodando"));
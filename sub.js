const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log("um usuario conectou");

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })

    let broadcast = (msg) => socket.broadcast.emit('chat',msg);

    socket.on('chat',(msg)=>{
        console.log(msg);
        setTimeout(broadcast, 1500,msg);
    })

})

server.listen(3000, console.log("Servidor rodando"));
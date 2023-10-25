const io = require('socket.io-client');
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout })

let ENDPOINT = 'http://localhost:3000'

rl.question('Qual o seu nome? ', (nome) => {
    let socket = io('http://localhost:3000')

    const sendMessage = () => {
        rl.question('> ', (msg) => {
            socket.emit('chat', `${nome}: ${msg}`)
            sendMessage()
        })
    }

    socket.on('connect', () => {
        console.log('Conectado ao servidor!');
        sendMessage()
    });

    socket.emit('chat', (msg) => {
        console.log(msg)
    })

    socket.on('disconnect', () => {
        console.log('Conexão perdida...')
    }); 
})
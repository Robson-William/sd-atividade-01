import {io} from 'socket.io-client';
import readline from 'readline'
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout })

let ENDPOINT = 'http://localhost:3000'

rl.question('Qual o seu nome? ', (nome) => {
    let socket = io(ENDPOINT)

    const sendMessage = () => {
        rl.question('', (msg) => {
            const data = new Date();
            const horaFormatada = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

            socket.emit('chat', `[${horaFormatada}] [${nome}]: ${msg}`)
            sendMessage();
        })
    }

    socket.on('connect', () => {
        console.log('Conectado ao chat!');
        sendMessage()
    });

    socket.on('chat', (msg) => {
        console.log(msg);
    })

    socket.on('disconnect', () => {
        console.log('Desconectado...')
    }); 
})
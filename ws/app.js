import { WebSocketServer as Socket } from 'ws';

const wss = new Socket({ port: 8000 }, () => {
    console.log('servidor ws rodando');
});

wss.on('connection', (socket) => {

    console.log('usuario conectado');

    socket.on('message', (message) => {

        console.log('recebido %s do usuario', message);

        socket.send(`${message}`);
    });

    socket.on('close', () => {
        console.log('usuario desconectado');
    });
});
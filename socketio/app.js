import { createServer } from 'node:http';
import { Server as Socket } from 'socket.io';

const server = createServer();
const io = new Socket(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('usuario conectado');

  socket.on('chat message', function incoming(message) {

        console.log('recebido %s do usuario', message);

        io.emit('chat broadcast', message);
    });

});

io.on('close', () => {
    console.log('usuario desconectado');
});

server.listen(9000, () => {
  console.log('servidor socket.io rodando');
});
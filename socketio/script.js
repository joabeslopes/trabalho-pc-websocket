const socket = io('ws://localhost:9000');

socket.on('connect', () => {
    console.log('conectado ao servidor socket.io');
}
);

socket.on('disconnect', () => {
    console.log('disconectado do servidor socket.io');
}
);

socket.on('chat broadcast', function (message) {
    const outputDiv = document.getElementById('messageList');
    outputDiv
        .innerHTML += `<p>recebido <b>"${message}"</b> do servidor</p>`;
    }
);

function sendMessage() {

    const messageInput = document
        .getElementById('messageInput');

    const message = messageInput.value.trim();

    if (message !== ''){

        socket.emit('chat message', message);

        messageInput.value = '';

    };

};
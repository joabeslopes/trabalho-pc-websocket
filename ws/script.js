const socket = new WebSocket('ws://localhost:8000');

socket.onopen = () => {
    console.log('conectado ao servidor ws');
};

socket.onclose = () => {
    console.log('disconectado do servidor ws');
};

socket.onmessage = (message) => {

    const outputDiv = document.getElementById('messageList');

    outputDiv
        .innerHTML += `<p>recebido <b>"${message.data}"</b> do servidor</p>`;
};

function sendMessage() {

    const messageInput = document
        .getElementById('messageInput');

    const message = messageInput.value.trim();

    if (message !== ''){

        socket.send(message);

        messageInput.value = '';

    };

};
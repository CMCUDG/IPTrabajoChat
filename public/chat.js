const socket = io.connect('https://trabajochat-58e86b622fcb.herokuapp.com');

const nameElement = document.querySelector('.chat-name');
const messageElement = document.querySelector('.chat-message');
const buttonElement = document.querySelector('.chat-button');
const outputElement = document.querySelector('.chat-output');
const feedbackElement = document.querySelector('.feedback');

buttonElement.addEventListener('click', function(){
    socket.emit('messageSent',{
        message : messageElement.value,
        name : nameElement.value
    })
});

messageElement.addEventListener('keypress', function(){
    socket.emit('messageTyping', nameElement.value);
});


socket.on('messageSent', function(data){
    feedbackElement.innerHTML = ''
    outputElement.innerHTML+= '<p><strong>' + data.name + ':</strong>' + data.message + '</p>'
});

socket.on('messageTyping', function(data){
    feedbackElement.innerHTML = '<p><em>' + data + ' esta escribiendo...</em></p>'
});

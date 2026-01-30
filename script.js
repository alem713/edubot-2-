document.getElementById('send-btn').addEventListener('click', function() {
    const input = document.getElementById('user-input');
    const message = input.value;
    
    if (message) {
        appendMessage('Вы', message);
        input.value = '';
        
        // Здесь в будущем будет вызов API нейросети
        setTimeout(() => {
            appendMessage('EduBot', 'Я пока учусь, но скоро смогу ответить на вопрос: ' + message);
        }, 1000);
    }
});

function appendMessage(sender, text) {
    const chatWindow = document.getElementById('chat-window');
    const msgDiv = document.createElement('p');
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatWindow.appendChild(msgDiv);
}

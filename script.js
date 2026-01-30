// --- ЛОГИКА АВТОРИЗАЦИИ И ПРОГРЕССА ---
let currentUser = null;

function openAuth() {
    const name = prompt("Введите ваше имя для входа:");
    if (name) {
        currentUser = { name: name, progress: 0 };
        saveAndDisplayUser();
    }
}

function saveAndDisplayUser() {
    localStorage.setItem('edubot_user', JSON.stringify(currentUser));
    document.getElementById('auth-section').innerHTML = `<span>👤 ${currentUser.name}</span>`;
    document.getElementById('user-profile').style.display = 'block';
    document.getElementById('username').innerText = currentUser.name;
}

// --- ИИ ПОМОЩНИК ---
async function askAI() {
    const input = document.getElementById('ai-input').value;
    const chat = document.getElementById('chat-window');
    
    chat.innerHTML += `<p><b>Вы:</b> ${input}</p>`;
    
    // Здесь будет запрос к API (Gemini/OpenAI)
    // Пока сделаем имитацию ответа
    setTimeout(() => {
        chat.innerHTML += `<p><b>AI:</b> Для решения этой задачи по ЕНТ используй формулу...</p>`;
    }, 1000);
}

// --- КАЛЬКУЛЯТОР ---
function addToCalc(val) {
    document.getElementById('calc-display').value += val;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('calc-display').value);
        document.getElementById('calc-display').value = result;
    } catch {
        alert("Ошибка в примере");
    }
}

function clearCalc() {
    document.getElementById('calc-display').value = "";
}

// Загрузка данных при старте
window.onload = () => {
    const saved = localStorage.getItem('edubot_user');
    if (saved) {
        currentUser = JSON.parse(saved);
        saveAndDisplayUser();
    }
};

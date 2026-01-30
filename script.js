// --- АККАУНТ И СОХРАНЕНИЕ ---
let user = { name: "", progress: 0 };

function login() {
    const name = prompt("Как тебя зовут?");
    if (name) {
        user.name = name;
        updateUI();
        save();
    }
}

function addProgress(points) {
    user.progress += points;
    alert(`Пройдено! +${points} баллов к прогрессу.`);
    updateUI();
    save();
}

function updateUI() {
    if (user.name) {
        document.getElementById('auth-display').innerHTML = `👤 ${user.name}`;
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('user-name-val').innerText = user.name;
        document.getElementById('user-progress').innerText = user.progress;
    }
}

function save() {
    localStorage.setItem('edubot_data', JSON.stringify(user));
}

// --- ИИ УЧИТЕЛЬ ---
function askAI() {
    const q = document.getElementById('ai-input').value;
    const win = document.getElementById('chat-window');
    if(!q) return;
    
    win.innerHTML += `<p><b>Вы:</b> ${q}</p>`;
    document.getElementById('ai-input').value = "";
    
    setTimeout(() => {
        win.innerHTML += `<p><b>🤖 AI:</b> Чтобы подготовиться к ЕНТ, важно понимать суть, а не зубрить. По этому вопросу рекомендую повторить главу 3.</p>`;
        win.scrollTop = win.scrollHeight;
    }, 600);
}

// --- КАЛЬКУЛЯТОР ---
let disp = document.getElementById('calc-display');
function press(v) { disp.value += v; }
function clr() { disp.value = ""; }
function equal() {
    try { disp.value = eval(disp.value); } 
    catch { disp.value = "Ошибка"; }
}

// --- ЕНТ ТЕСТ ---
function checkEnt(ans) {
    const res = document.getElementById('ent-res');
    if (ans === 'I=U/R') {
        res.innerHTML = "<span style='color:green'>Верно! +5 баллов</span>";
        addProgress(5);
    } else {
        res.innerHTML = "<span style='color:red'>Неправильно, попробуй еще раз.</span>";
    }
}

// Загрузка при старте
window.onload = () => {
    const data = localStorage.getItem('edubot_data');
    if (data) {
        user = JSON.parse(data);
        updateUI();
    }
};

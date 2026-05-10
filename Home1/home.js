// Alternância entre abas (sem verificações extras)
const tabLogin = document.getElementById('tabLoginBtn');
const tabRegister = document.getElementById('tabRegisterBtn');
const loginDiv = document.getElementById('loginForm');
const registerDiv = document.getElementById('registerForm');

tabLogin.addEventListener('click', function () {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    loginDiv.style.display = 'flex';
    registerDiv.style.display = 'none';
    // Limpa mensagens anteriores (apenas para não acumular)
    document.getElementById('loginMessage').innerHTML = '';
    document.getElementById('registerMessage').innerHTML = '';
});

tabRegister.addEventListener('click', function () {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    loginDiv.style.display = 'none';
    registerDiv.style.display = 'flex';
    document.getElementById('loginMessage').innerHTML = '';
    document.getElementById('registerMessage').innerHTML = '';
});

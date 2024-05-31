function MostrarLogin() {
    document.getElementById('formularioLogin').style.display = 'block';
    document.getElementById('formularioRegistro').style.display = 'none';
}

function MostrarRegistro() {
    document.getElementById('formularioRegistro').style.display = 'block';
    document.getElementById('formularioLogin').style.display = 'none';
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var UsernameArmazenado = localStorage.getItem('username');
    var SenhaArmazenada = localStorage.getItem('password');

    if (username === UsernameArmazenado && password === SenhaArmazenada) {
        alert('Login bem-sucedido!');
        window.location.href = "../blog/html/publicacoes.html";
        return false;
    } else {
        alert('Usuário ou senha incorretos!');
        return false;
    }
}

function registrar() {
    var username = document.getElementById('Registrar-username').value;
    var email = document.getElementById('Registrar-email').value;
    var password = document.getElementById('Registrar-password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Cadastro bem-sucedido!');
    return true;
}

import Button from '../components/button.js';
import Input from '../components/input.js';

function AuthEmailPassButton() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            if (user) {
                window.location.hash = '#feed';
            }
        }).catch((error) => {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o e-mail e senha inseridos.');
        });
}

function Google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        window.location.hash = '#feed';
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}

function Login() {
    const template = `
    <img class='logo' src='logoredetech.png'/>
    <form class='content'>
    <h2 class='bemvinda'>Seja bem-vinda(o)!</h2>
    ${Input({
    class: 'js-email-input',
    placeholder: 'E-mail',
    type: 'email',
  })}
    ${Input({
    class: 'js-password-input',
    placeholder: 'Senha',
    type: 'password',
  })}
    ${Button({
    class: 'login',
    title: 'Log In',
    onClick: AuthEmailPassButton,
  })}
    <p class='cadastro'>Ou entre com sua conta...</p>
    ${Button({
    class: 'google-btn',
    title: '',
    onClick: Google,
  })}
    <p class='cadastro'>Ainda não tem uma conta?</p>
    <a href='#register'>Registre-se!</a>
    </form>`;

    return template;
}

export default Login;
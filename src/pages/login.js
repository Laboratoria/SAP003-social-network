import Button from '../components/button.js';
import Input from '../components/input.js';
import Link from '../components/link.js';
import Register from './register.js';

window.onhashchange = onHashChange;

function userLogin() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/user-not-found') {
      document.getElementById('error').innerText = `Usuário não cadastrado.`;
    }
  });
}

function onHashChange() {
  if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  }
}

function Login() {

  window.location.href = '#login';

  const login = `<form>
    ${Input({
    id: 'email',
    class: 'primary-input',
    type: 'email',
    placeholder: 'E-mail',
  })}
  ${Input({
    id: 'password',
    class: 'primary-input',
    type: 'password',
    placeholder: 'Senha',
  })}
  ${Button({
    id: 'send',
    class: 'primary-button',
    title: 'Entrar',
    onClick: userLogin,
  })}
    </form>

    <p id="error"></p>

  ${Link({
    class: 'primary-link',
    hash: '#register',
    text: 'Registre-se',
  })}`;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector('#main').innerHTML = Home()
    }
  });

  return login;
}

export default Login;

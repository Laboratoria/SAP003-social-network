import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  const template = `
    <header class="header"><img src="./Imagens/header.png"></header>
    <h1 class="name-network">Heroínas</h1>
    <h3 class="text-simple">Bem vinda, programadora!</h3>
    <form class="primary-box">
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'email',
    })}
      ${Input({
      class: 'js-password-input ',
      placeholder: 'password',
      type: 'password',
    })}
      ${Button({
      id: 'btnLogin',
      title: 'Login',
      onClick: sendLogin,
    })}
      ${Button({
      id: "iGoogle",
      title:'<i class="fab fa-google "></i>',
      onClick: sendLogin,
      })}
  </form>
  <p>Não tem uma conta? 
    ${Button({
      id:'register', 
      title:'Registre-se', 
      onClick:HashRegister})}
  </p>
  `;
  location.hash = 'login'
  return template;
}

function sendLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => { location.hash = 'post' })
    .catch(function (error) {
      let errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Senha errada!');
      } else {
        alert('Usuário não cadastrado');
      }
    })
}

function HashRegister() {
  location.hash = 'register';
}

export default Login;

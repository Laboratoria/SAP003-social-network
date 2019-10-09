import Button from '../components/button.js';
import Input from '../components/input.js';

function sendLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().errorCode ="usuário não cadastrado";
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Senha errada!');
      } else {
        alert(errorMessage);
      }
      console.log(error);
  })
}

function Login() {
  const template = `
    <header class="header"><img src="./Imagens/header.png"></header>
    <h1 class="name-network">Heroínas</h1>
    <h3 class="text-simple">Bem vinda, programadora!</h3>
    <form class="primary-box">
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'text',
    })}
      ${Input({
      class: 'js-password-input ',
      placeholder: 'password',
      type: 'password',
    })}
      ${Button({
      id: 'btn',
      title: 'Login',
      onClick: sendLogin,
    })}
    <button><i class="fab fa-google fa-2x"></i></button>
  </form>
  <p>Não tem uma conta? <a href="">Registre-se</a></p>
  `;
  return template;
}
export default Login;
import Button from '../components/button.js';
import Input from '../components/input.js';

function createUser() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    firebase.auth().onAuthStateChanged(() => {
      const user = firebase.auth().currentUser;

      user.sendEmailVerification().then(() => {

      }).catch((error) => {
        console.log(error);
      });
    });
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);

    const errorMessage = error.message;
    if (errorCode === 'auth/email-already-in-use') {
      document.getElementById('error').innerText = 'E-mail já cadastrado.';
    } else if (errorCode === 'auth/weak-password') {
      document.getElementById('error').innerText = 'A senha é muito pequena.';
    } else if (errorCode === 'auth/invalid-email') {
      document.getElementById('error').innerText = 'E-mail inválido.';
    } else {
      document.getElementById('error').innerText = errorMessage;
    }
  });
}

function Register() {
  return `
    <section class ='initial-section'>
      <header class='initial-header'></header>
      <img class='img-section' src='img/logo.png'/>
      <div class="text">Registre-se para fazer parte da maior rede social de educação do Brasil!</div>
    
      <form>
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
    class: 'primary-button',
    title: 'Registre-se',
    onClick: createUser,
  })}
  <p class='login-error' id="error"></p>
      </form>`;
}

export default Register;

import Button from '../components/button.js';
import Input from '../components/input.js';

function createUser() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        window.location.href = '#home';
      }
    });
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

function Register() {
  return `
  <section class ='initial-section'>
    <header class='initial-header' src='img/1.png'></header>
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
      </form>`;
}

export default Register;

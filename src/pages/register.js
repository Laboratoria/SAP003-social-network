import Button from '../components/button.js';
import Input from '../components/input.js';

function createCount() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
    location.hash = 'login';
   })
  .catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    });
}

function Register() {
  const template = `
    <header class="header"><img src="./Imagens/header-logo.png"></header>
    <h1 class="name-network">Heroínas</h1>
    <h3 class="text-simple">Para fazer seu cadastro na rede Heroínas preencha os campos abaixo!</h3>
    <form class="primary-box">
    ${Input({
        class: 'js-name-input',
        placeholder: 'name',
        type: 'text',
      })}
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
      id: 'create-account',
      title: 'Criar Conta',
      onClick: createCount,
    })}
    </form>
  `;
  return template;
}
export default Register;

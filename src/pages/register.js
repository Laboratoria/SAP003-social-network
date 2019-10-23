import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  const template = `
  <div class="box">
    <header class="header"><img src="./Imagens/header-logo.png"></header>
    <section class = "register-box">
      <h1 class="name-network">Heroínas</h1>
      <h3 class="text-simple">Para fazer seu cadastro na rede Heroínas preencha os campos abaixo!</h3>
      <form class="primary-box">
        ${Input({
        class: 'js-name-input',
        placeholder: 'Nome Completo',
        type: 'text',
      })}
        ${Input({
        class: 'js-email-input',
        placeholder: 'Email',
        type: 'text',
      })}
          ${Input({
        class: 'js-password-input ',
        placeholder: 'Senha',
        type: 'password',
      })}
      <p class="alertMessage"></p>
          ${Button({
        id: 'create-account',
        title: 'Criar Conta',
        onClick: createCount,
      })}
    </form>
  </section>
</div>
  `;
  location.hash = 'register'
  return template;
}

function createCount() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: name
      });
      firebase.auth().currentUser.sendEmailVerification()
      window.location.hash = 'login';
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        document.querySelector('.alertMessage').textContent ='E-mail já cadastrado.';
      } if (errorCode == 'auth/weak-password') {
        document.querySelector('.alertMessage').textContent = 'A senha é muito fraca.';
      } if (errorCode == 'auth/invalid-email') {
        document.querySelector('.alertMessage').textContent ='E-mail inválido.';
      } else {
        document.querySelector('.alertMessage').textContent = errorMessage;
      }
    });
}

export default Register;

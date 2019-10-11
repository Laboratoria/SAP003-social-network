import Button from '../components/button.js';
import Input from '../components/input.js';

function createCount() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.firestore().collection('users').doc(name).set({
        Nome: name,
        conta: email,
    })
    location.hash = 'login';
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alert('E-mail já cadastrado.');
      } if (errorCode == 'auth/weak-password') {
        alert('A senha é muito fraca.');
      } if (errorCode == 'auth/invalid-email') {
        alert('E-mail inválido.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

function Register() {
  const template = `
  <div class="teste">
    <header class="header"><img src="./Imagens/header-logo.png"></header>
    <section class = "login-box">
      <h1 class="name-network">Heroínas</h1>
      <h3 class="text-simple">Para fazer seu cadastro na rede Heroínas preencha os campos abaixo!</h3>
      <form class="primary-box">
        ${Input({
        class: 'js-name-input',
        placeholder: 'Nome',
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
          ${Button({
        id: 'create-account',
        title: 'Criar Conta',
        onClick: createCount,
      })}
    </form>
  </section>
</div>
  `;
  return template;
}
export default Register;

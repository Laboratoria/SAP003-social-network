import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  const template = `
  <div class="box">
    <header class="header"><img src="./Imagens/header-logo.png"></header>
    <section class = "login-box">
      <h1 class="name-network">Heroínas</h1>
      <h3 class="text-simple">Bem vinda, programadora!</h3>
      <form class="primary-box">
        ${Input({
        class: 'js-email-input',
        placeholder: 'Email',
        type: 'email',
        })}
        ${Input({
        class: 'js-password-input ',
        placeholder: 'Senha',
        type: 'password',
        })}
        ${Button({
        id: 'btnLogin',
        title: 'Login',
        onClick: sendLogin,
        })}
        ${Button({
        id: 'forget',
        title: 'Esqueci a senha',
        onClick: forgetPassword,
        })}
        <p class="text-simple">Ou entre com:</p>
        ${Button({
        id: "iGoogle",
        title: '<i class="fab fa-google"></i>',
        onClick: loginGoogle,
        })}
      </form>
    <p class="alertMessage"></p>
    <p class="text-simple">Não tem uma conta?</p>
    ${Button({
    id: 'register',
    title: 'Registre-se',
    onClick: HashRegister
    })}
  </section>
  </div>
  `;
  location.hash = 'login'
  return template;
}

function sendLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      location.hash = 'post'
    })
    .catch(function (error) {
      let errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        document.querySelector('.alertMessage').textContent = 'Senha errada!.';
      } if (errorCode === 'auth/user-not-found') {
        document.querySelector('.alertMessage').textContent = 'Usuário não encontrado.';
      } else {
        document.querySelector('.alertMessage').textContent = 'Usuário não cadastrado.';
      }
    })
}

function loginGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      let token = result.credential.accessToken;
    }
    let user = result.user;
  }).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
}

function forgetPassword() {
  window.location.hash = 'update';
}

function HashRegister() {
  window.location.hash = 'register';
}

export default Login;

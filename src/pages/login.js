import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  const template = `
  <div class="teste">
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
    .then(() => { location.hash = 'post' })
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
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    let user = result.user;
  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

function HashRegister() {
  location.hash = 'register';
}

export default Login;

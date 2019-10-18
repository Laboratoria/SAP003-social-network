// import locationHasChange from '../main.js';
import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      window.user = {
        email: response.user.email,
        uid: response.user.uid,
      };
      window.location.hash = '#feed';
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function google() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      if (result) {
        location.hash = '#feed';
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
}

function TemplateLogin() {
  const template = `

    <img src="img/moviment.png" alt="Logo do Moviment" class="image">
    <h4 class="text-main">Bem vinda, Moviment!</h4>
    <form class="form-login">
      ${Input({
    class: 'js-email-input',
    placeholder: 'e-mail',
    type: 'email',
  })}
      ${Input({
    class: 'js-password-input',
    placeholder: 'password',
    type: 'password',
  })}
      ${Button({ id: 'bt-login', title: 'Login', call: login })}
    </form>
    <p class="text-main">Pode acessar também com...</p>
    ${Button({ id: 'bt-google', title: '<i class="fab fa-google"></i> Google', call: google })}
   
    <p class="text-main"><a href="#createAccount">Não tem uma conta?</a></p>
  `;
  return template;
}

export default TemplateLogin;

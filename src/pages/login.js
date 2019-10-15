// import locationHasChange from '../main.js';
import Button from "../components/button.js";
import Input from "../components/input.js";

function login() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(response) {
      if (response) {
        location.hash = '#feed';
      }
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
}

function google() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    // let token = result.credential.accessToken;
    // let user = result.user;
    .then(function(result) {
      if(result) {
        location.hash = '#feed';
      }
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      alert(errorCode, errorMessage, email, credential);
    });
  }

function TemplateLogin() {
  const template = `

    <img src="img/moviment.png" alt="Logo do Moviment" class="image">
    <h4 class="text-main">Bem vinda, Moviment!</h4>
    <form class="form-login">
      ${Input({
        class: "js-email-input",
        placeholder: "e-mail",
        type: "email"
      })}
      ${Input({
        class: "js-password-input",
        placeholder: "password",
        type: "password"
      })}
      ${Button({ id: "bt-login", title: "log in", call: login })}
    </form>
    <p class="text-main">Pode acessar também com...</p>
    ${Button({ id: 'bt-google', title: 'Google', call: google })}
   
    <p class="text-main"><a href="#createAccount">Não tem uma conta?</a></p>
  `;
  return template;
}

export default TemplateLogin;

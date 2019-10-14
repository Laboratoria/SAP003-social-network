
// import locationHasChange from '../main.js';
import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {

  // criar hash para ir para a timeline.
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function (response) {
    if(response){
      location.hash = '#feed'
    }

  })
  
  .catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorCode, errorMessage);
  });

}
  // window.addEventListener('hashchange', locationHasChange, false);
  // location.hash = '#Feed';

function TemplateLogin() {
  const template = `
  <img src="img/moviment.png" alt="Logo do Moviment">
  <form class="form-login">
  <h4>Bem vinda, Moviment!</h4>
  ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
  ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password'})}
  ${Button({ id: 'bt-login', title: 'log in', call: login })}
  <p class="text-main">Pode acessar também com...</p>
  <p class="text-main"><a href="#createAccount">Não tem uma conta?</a></p>
  </form>
  `;

// window.location = "#createAccount";

  return template;
}

export default TemplateLogin;
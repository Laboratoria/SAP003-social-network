import locationHasChange from './pages/main.js';
import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {

  // criar hash para ir para a timeline.
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode, errorMessage);
  });

  window.addEventListener("hashchange", locationHasChange, false);
  location.hash = "#Feed";

}

function TemplateLogin() {
  const template = `
  <img src="img/moviment.png" alt="Logo do Moviment">
    <h4>Bem vinda, Movimenter!</h4>
    <form>    
    ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
    ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password' })}
    ${Button({ id: 'bt-login', title: 'log in', call: login })}
    </form>
    <p>Pode acessar também com...</p>

    <p><a href="#createAccount">Não tem uma conta?</a></p>
  `;


  return template;
}

export default TemplateLogin;

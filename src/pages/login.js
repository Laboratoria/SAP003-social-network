import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {
  // window.location.hash
  // criar hash para ir para a timeline.
  const email = document.querySelector('.js-email-input').value;
  console.log(email);
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

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

    <p>Não tem uma conta? <p>
  `;


  return template;
}

export default TemplateLogin;

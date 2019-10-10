import Button from '../components/button.js';
import Input from '../components/input.js';

function newUser() {
  
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function newUserTemplate() {
  const template = `
  <img src="img/moviment.png" alt="Logo do Moviment">
    <h4>Bem vinda(o), Moviment! Para se cadastrar, preencha as informações</h4>
    <form>   
    ${Input({ class: 'js-name-input', placeholder: 'name', type: 'text' })} 
    ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
    ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password' })}
    </form>
    ${Button({ id: 'bt-creat-account', title: 'criar a conta', call: newUser })}
  

  `;
  return template;
}

export default newUserTemplate;
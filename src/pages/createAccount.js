import Button from '../components/button.js';
import Input from '../components/input.js';

function newUser() {
  if(name == ""|| email == "" || password == "") {
    alert("Insira os dados solicitados...");
  }

  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;  
  const name = document.querySelector('.js-name-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function newUserTemplate() {

  const inNewUser = `
    ${Input({ class: 'js-name-input', placeholder: 'name', type: 'text', })} 
    ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email', })}
    ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password', })}
    ${Button({ id: 'bt-creat-account', title: 'criar a conta', call: newUser, })}
  `;

  const template = `
  <img src="img/moviment.png" alt="Logo do Moviment">
  <h4>Bem vinda(o), Movimenter! Para se cadastrar, preencha as informações</h4>
  <form>
  ${inNewUser}
  </form>   
  `;

  return template;
}

export default newUserTemplate;
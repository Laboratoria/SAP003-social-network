import Button from "../components/button.js";
import Input from "../components/input.js";

function newUser() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  const name = document.querySelector('.js-name-input').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (response) {
      if(response){
        location.hash = '#feed'
      }
  
    })
    .catch(function(error){
    let errorCode = error.code;
    let errorMessage = error.message;
   alert(errorCode, errorMessage);
    });
}

function newUserTemplate() {
  const inNewUser = `
  <form class="form-login">
    ${Input({ class: 'js-name-input', placeholder: 'name', type: 'text' })} 
    ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
    ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password'})}
    ${Button({ id: 'bt-creat-account', title: 'criar a conta', call: newUser })}
  </form>
  `;

  const template = `
  <img src="img/moviment.png" alt="Logo do Moviment" class="image">
  <h4 class="text-main">Bem vinda(o), Moviment! Para se cadastrar, preencha as informações</h4>
  ${inNewUser}
  `;

  return template;
}

export default newUserTemplate;

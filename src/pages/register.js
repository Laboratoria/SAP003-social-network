import Button from '../components/button.js';
import Input from '../components/input.js';

function register(){
    const template = `
    <div class="logotipo">
       <h4 class="text-center">ALCATEIA</h4>
    </div>
    <div class="banner"></div>
    ${Button({id:'voltar', title: 'Voltar', onClick: goToLogin})}
    

    <h2> Crie a sua conta </h2>
    
  <form>
    ${Input({placeholder:'Digite seu nome', type:'text', class:'username'})}
    ${Input({ placeholder: 'E-mail', type: 'email', class: 'js-email-input'})}
    ${Input({ placeholder: 'Senha', type: 'password', class: 'js-password-input'})}
    ${Button({ class:'cadastrar', id: 'button', title: 'Cadastrar', onClick: buttonRegister})}
  </form>
       `;
      return template;
  }

  function goToLogin() {
    window.location.hash='#home';
  }
  function buttonRegister() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    const name = document.querySelector('.username').value;
    firebase.auth().createUserWithEmailAndPassword(email, password, name)
    .then(function(firebaseUser) {
        window.location.hash = '#feed'
    })
    .catch(function(user) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });

    
}
  export default register;

  
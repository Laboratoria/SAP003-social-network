import Button from '../components/button.js';
import Input from '../components/input.js';

function register(){
    const template = `
    ${Button({id:'voltar', title: 'Voltar', onClick: goToLogin})}

    <h2> Crie a sua conta </h2>
  <form>
       ${Input({ placeholder: 'E-mail', type: 'email', class: 'js-email-input'})}
       ${Input({ placeholder: 'Senha', type: 'password', class: 'js-password-input'})}
       ${Button({ id: 'button', title: 'Cadastrar', onClick: buttonRegister})}
  </form>
       `;
      return template;
  }
  export default register;

  function goToLogin() {
    window.location.hash='home';
  }

  function buttonRegister() {
  const email= document.querySelector('.js-email-input').value;
  const password= document.querySelector('.js-password-input').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(firebaseUser){
      window.location.hash = 'feed';
  });
}

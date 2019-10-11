import Button from '../components/button.js';
import Input from '../components/input.js';



function register(){
    const template = `
        <h2> Crie a sua conta </h2>
  <form> 
       ${Input({ placeholder: 'E-mail', type: 'email', class: 'js-email-input'})}
       ${Input({ placeholder: 'Senha', type: 'password', class: 'js-password-input'})}
       ${Button({ id: 'button', title: 'Cadastrar', onClick: buttonRegister})}
  </form>
       `;
      return template;
  }
  
  
  function buttonRegister() {
    const email= document.querySelector('.js-email-input').value;
    const password= document.querySelector('js-password-input').value;
    }
  
  
  export default register;
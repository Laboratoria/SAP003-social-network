import Button from '../components/button.js';
import Input from '../components/input.js';

function createCount() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    });
    
  
}

function Register() {
  const template = `
    <header><img class="header"  src="./Imagens/header.png"></header>
    <h1>Heroínas</h1>
    <h3>Para fazer seu cadastro na rede Heroínas preencha os campos abaixo!</h3>
    <form>
    ${Input({
        class: 'js-name-input',
        placeholder: 'name',
        type: 'text',
      })}
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'text',
    })}
      ${Input({
      class: 'js-password-input ',
      placeholder: 'password',
      type: 'password',
    })}
      ${Button({
      id: 'btn',
      title: 'Criar Conta',
      onClick: createCount,
    })}
    </form>
  `;
  return template;
}
export default Register;
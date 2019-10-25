import Button from '../components/button.js';
import Input from '../components/input.js';

function createUserWithEmailAndPassword() {
  const name = document.querySelector('.js-email-input').value;
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registered) => {
      window.location.hash = '#database';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Falha ao cadastrar ou usuário já cadastrado');
      window.location.hash = '#home';
    });
}

function Register() {
  const template = `
    <form class = 'form-register'>
    <h1 class="page-title">Cadastro</h1>
    ${Input({ 
      class: 'js-name-input',
      placeholder: 'Nome',
      type: 'Nome'
    })} 
    ${Input({ 
      class: 'js-email-input',
      placeholder: 'exemplo@exemplo.com.br',
      type: 'email'
    })}
    ${Input({ 
      class: 'js-password-input',
      placeholder: 'Senha',
      type: 'password'
    })}
    ${Button({ 
      class: 'btn-create-account', 
      title: 'Cadastre-se', 
      onClick: createUserWithEmailAndPassword 
    })}
    <p class="login-option">Já é cadastrado? <a href="#home"><strong>Entrar!</strong></a></p>
    </form>
  `;
  return template;
}

export default Register;
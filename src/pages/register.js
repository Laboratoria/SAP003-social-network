import Button from '../components/button.js';
import Input from '../components/input.js';

function createUserWithEmailAndPassword() {
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
    <form class = 'cadastro'>
    <h1 class="titulo title-size">Cadastro</h1>
    ${Input({ 
      class: 'name', 
      placeholder: 'Nome', 
      type: 'Nome'
    })} 
    ${Input({ 
      class: 'js-email-input', 
      placeholder: 'Email',
      type: 'email' 
    })}
    ${Input({ 
      class: 'js-password-input', 
      placeholder: 'Senha', 
      type: 'password' 
    })}
    ${Button({ 
      class: 'create-account', 
      title: 'Cadastre-se', 
      onClick: createUserWithEmailAndPassword 
    })}
    <p class="login-option">Já é cadastrado? <a href="#home"><strong>Entrar!</strong></a></p>
    </form>
  `;
  return template;
}

export default Register;
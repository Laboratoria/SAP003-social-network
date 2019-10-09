import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  function create() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((certo) => {
      console.log('certo')
    },(error) => {
    // Handle Errors here.  
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errooooo')
    // if (errorCode == 'auth/weak-password') {
    //   alert('A senha é muito fraca');
    // } else {
    //   alert(errorMessage);
    // }
    // if (errorCode == 'auth/email-already-in-use') {
    //   alert('O e-mail informado já está em uso');
    // } else {
    //   alert(errorMessage);
    // }
    // if (errorCode == 'auth/operation-not-allowed') {
    //   alert('Conta não ativada.');
    // } else {
    //   alert(errorMessage);
    // }
    // if (errorCode == 'auth/invalid-email') {
    //   alert('Email inválido');
    // } else {
    //   alert(errorMessage);
    //  }
    });
  }

  const template = `
    <form>
      ${Input({ type: 'email', class: 'js-email-input', placeholder: 'email' })}
      ${Input({ type: 'password', class: 'js-password-input', placeholder: 'password' })}
      ${Input({ type: 'text', class: 'js-text-input', placeholder: 'nome' })}
      ${Input({ type: 'date', class: 'js-date-input' })}
      ${Button({ class: 'create', title: 'Criar conta', onclick: create})}
    </form>
    
  `;
  return template;
}


export default Register;
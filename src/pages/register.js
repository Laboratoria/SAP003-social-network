import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  function create() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((certo) => {
      console.log('certo')
      window.location.href = '#feed';
    },(error) => {
    // Handle Errors here.  
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errooooo')
      document.querySelector('.error').textContent = errorMessage;
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
    <section class="box-login">
    <h1>Create a New Account</h1>
    <form>
      ${Input({ type: 'text', class: 'js-text-input', placeholder: 'name' })}<br>
      ${Input({ type: 'date', class: 'js-date-input' })}<br>
      ${Input({ type: 'email', class: 'js-email-input', placeholder: 'email' })}<br>
      ${Input({ type: 'password', class: 'js-password-input', placeholder: 'password' })}<br>
      ${Button({ class: 'create', title: 'Criar conta', onclick: create})}<br>
    </form>
    <p class="error"</p><br>
    <p>Já tem uma conta? <a href="#login">Login</a></p>
    </section>
  `;
  return template;
}


export default Register;
import Button from '../components/button.js';
import Input from '../components/input.js';

function Register() {
  function create() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((certo) => {
      console.log('certo');
      window.location = '#feed';
    }, (error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errooooo');
      if (errorCode === 'auth/weak-password') {
        document.querySelector('.error').textContent = 'A senha deve possuir no mínimo 6 caracteres';
      }
      if (errorCode === 'auth/email-already-in-use') {
        document.querySelector('.error').textContent = 'O e-mail informado já está em uso';
      }
      if (errorCode === 'auth/operation-not-allowed') {
        document.querySelector('.error').textContent = 'Conta não ativada';
      }
      if (errorCode === 'auth/invalid-email') {
        document.querySelector('.error').textContent = 'Email inválido';
      }
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
      ${Button({ class: 'create', title: 'Criar conta', onclick: create })}<br>
    </form>
    <p class="error"</p><br>
    <p>Já tem uma conta? <a href="#login">Login</a></p>
    </section>
  `;
  return template;
}


export default Register;

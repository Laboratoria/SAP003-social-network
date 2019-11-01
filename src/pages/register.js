import Button from '../components/button.js';
import input from '../components/input.js';

function Register() {
  const template =
   `  
      <img class="logo" src="img/registerlogo.png"/>
      <p class="register-info">Faça parte da nossa rede de colecionadores!</p>
      <form class='register-form'>
        ${input({ class: 'name', placeholder: 'Nome', type: 'text' })}<br>
        ${input({ class: 'email-re', placeholder: 'Email', type: 'email' })}<br>
        ${input({ class: 'password-re', placeholder: 'Senha', type: 'password' })}<br>
        ${Button({ class: 'btn-register', onclick: emailAndPass, title: 'Register' })}<br>
      </form>
      <p class="login-link">Já é registrado? Faça o <a class='a-register' href="#login">login</a>
    `;
  return template;
}

function emailAndPass() {
  const userEmail = document.querySelector('.email-re').value;
  const userName = document.querySelector('.name').value;
  const userPass = document.querySelector('.password-re').value;
   firebase
    .auth().createUserWithEmailAndPassword(userEmail, userPass).then(() => {})
    .catch(() => {
      alert('Usuário já cadastrado');
    })

  window.name = userName;
}

export default Register;

import Button from '../components/button.js';
import input from '../components/input.js';

function Register() {
  const template =
   `  
      <img class="logo" src="img/Logo.png"/> 
      <form>
      <p class="register-info">Faça parte da nossa rede de colecionadores!</p>
      ${input({ class: 'name', placeholder: 'Nome', type: 'text' })}<br>
      ${input({ class: 'email-re', placeholder: 'Email', type: 'email' })}<br>
      ${input({ class: 'password-re', placeholder: 'Senha', type: 'password' })}<br>
      ${Button({ class: 'btn-register', onclick: emailAndPass, title: 'Register' })}<br>
      </form>
      <p class="login-link">Já é registrado? Faça o <a href="#login">login</a>
      </body>
    `;
  return template;
}


function emailAndPass() {

  const userEmail = document.querySelector('.email-re').value;
  const userName = document.querySelector('.name').value;
  const userPass = document.querySelector('.password-re').value;
  firebase
    .auth().createUserWithEmailAndPassword(userEmail, userPass).then(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.location.hash = '#feed';
        }})
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
      alert('falha ai');
    })
}


export default Register;

import Button from '../components/button.js';
import input from '../components/input.js';

function Register() {
  const template = `
      <figure>
      <img class="logo" src="img/Logo.png"/>
      </figure>
      <h1>Register</h1>
      <form>
      ${input({ class: 'name', placeholder: 'name', type: 'text' })}
      ${input({ class: 'email-re', placeholder: 'email', type: 'email' })}
      ${input({ class: 'password-re', placeholder: 'password', type: 'password' })}
      ${Button({ class: 'btn-register', onclick: emailAndPass, title: 'REGISTRAR' })}
      </form>
    `;
  return template;
}


function emailAndPass() {

  const userEmail = document.querySelector('.email-re').value;
  const userName = document.querySelector('.name').value;
  const userPass = document.querySelector('.password-re').value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .then(() => {
      alert('valeu' + userName);
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
      alert('falha ai');
    })
}


export default Register
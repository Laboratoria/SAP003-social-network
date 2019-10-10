import Button from '../components/button.js';
import Input from '../components/input.js';

function createUser() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
}

function Register() {
  return `<form>
    ${Input({
    id: 'email',
    class: 'primary-input',
    type: 'email',
    placeholder: 'E-mail',
  })}
  ${Input({
    id: 'password',
    class: 'primary-input',
    type: 'password',
    placeholder: 'Senha',
  })}
  ${Button({
    title: 'Registre-se',
    onClick: createUser,
  })}
    </form>`;
}

export default Register;

import Button from '../components/button.js';
import Input from '../components/input.js';

function buttonLogin(){
  const email = document.querySelector('.input-email').value
    const password = document.querySelector('.input-password').value
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function() {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      // ...
    });
}

function Login() {
  const template = `
    <h1>InstaHealth</h1>
    <form>
      ${Input({
        class: 'input-email',
        placeholder: 'email',
        type: 'email'
      })}

      ${Input({
        class: 'input-password',
        placeholder: 'password',
        type: 'password'
      })}

    ${Button({ id: '🎉', title: 'Entrar 🎉', onClick: buttonLogin })}
    </form>
  `;

  return template;
}

export default Login;
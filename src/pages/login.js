import Button from '../components/button.js';
import Input from '../components/input.js';

function signIn() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  function certo() console.log("certo");
  function erro() console.log('erro');
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    // } else {
    //     alert(errorMessage);
    // }

  console.log(email, password)
  firebase.auth().signInWithEmailAndPassword(email, password).then(certo, erro) 
  }

function Login() {
  const template = `
    <h1>Login</h1>
      <form>
        ${Input({ type: 'email', class: 'js-email-input', placeholder: 'email' })}
        ${Input({ type: 'password', class: 'js-password-input', placeholder: 'password' })}
        ${Button({ class: 'signIn', title: 'signIn', onclick: signIn})}
        
      </form>
      <p>Clique aqui para criar uma conta</p>
    `;
  return template;
}


export default Login;
import Button from '../components/button.js';
import Input from '../components/input.js';
// import Label from '../components/label.js';

function Login() {
  const template= `
  <h2> Faça login na sua conta </h2>
  <form>
  ${Input({placeholder: 'Digite seu e-mail', type: 'email'})}
  ${Input({placeholder: 'Digite sua senha', type: 'password'})}
  ${Button({id: 'button', title: 'Entrar'})}
  </form>
  `;
  return template;
}

export default Login;

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});email-password.html





//${Button({ id: '🎉', title: 'Botão 🎉' })}

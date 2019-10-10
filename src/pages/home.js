/* eslint-disable no-console */
import Button from '../components/button.js';
import Input from '../components/input.js';

function mudarPg() {
  window.location.href = '#cadastro';
}

function enviarLogin() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  console.log(email, password);
  window.location.href = '#feed';
  firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
  // Handle Errors here.
    // let errorCode = error.code;
    // let errorMessage = error.message;
    // ...
  });
}

// function cadastrarUser() {
//   const email = document.querySelector('.email-input').value;
//   const password = document.querySelector('.senha-input').value;
//   console.log(email, password);
// }

function Login() {
  const template = `
  <h1> Rede Social</h1>
  <h2> Seja Bem vindx</h2>

  ${Input({
    class: 'email-input',
    placeholder: 'email',
    type: 'text',
  })}
    ${Input({
    class: 'senha-input',
    placeholder: 'password',
    type: 'password',
  })} <br>
    ${Button({
    id: 'enviar',
    title: 'Enviar',
    onClick: enviarLogin,
  })}
    ${Button({
    id: 'cadastrar',
    title: 'Cadastrar',
    onClick: mudarPg,
  })}
`;
  return template;
}

export default Login;

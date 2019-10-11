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
  console.log(email, password)
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode)
    // ...
  });
}


// function cadastrarUser() {
//   const email = document.querySelector('.email-input').value;
//   const password = document.querySelector('.senha-input').value;
//   console.log(email, password);
//}

function cadastrarUser(){
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  console.log(email, password)
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    // ...
  });
};

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
    title: 'Login',
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



//Para desconectar um usuário, chame signOut:
/*firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});*/

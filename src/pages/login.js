/* eslint-disable indent */
import Button from '../components/button.js';
import Input from '../components/input.js';

function changePg() {
  window.location.href = '#register';
}

function googleSignIn() {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    window.location.hash = '#feed';

    // ...
  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

function enviarLogin() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    window.location.href = '#feed';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

function Login() {
  const template = `
  <main classe="main-log-cad">
 <header class="header-reg">
        <img src = "./images/transparent.png" alt="logo" class="logo"> 
        <h1 class="top-banner">Você mais conectada(o) com a Astronomia! </h1>
  
        </header>
        <form class="form-register">
        <p class="cad"> Bem vinda(o)!</p>
            ${Input({
    class: 'email-input',
    placeholder: 'E-mail: henrietta@gmail.com',
    type: 'text',
  })}
            ${Input({
    class: 'senha-input',
    placeholder: 'Senha',
    type: 'password',
  })}
              ${Button({
    id: 'enviar',
    title: 'Login',
    onClick: enviarLogin,

  })}
    ${Button({
    id: 'google',
    title: '<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google-mail" class="google-mail">',
    onClick: googleSignIn,
  })}
    ${Button({
    id: 'cadastrar',
    title: 'Cadastrar',
    onClick: changePg,
  })}
   
        </form>
        </main>
    `;
  return template;
}

export default Login;

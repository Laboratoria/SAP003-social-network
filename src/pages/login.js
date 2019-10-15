import Button from '../components/button.js';
import Input from '../components/input.js';
import Link from '../components/link.js';
import Home from './home.js';

function userLogin() {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        window.location.href = '#home';
      }
    });
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/user-not-found') {
      document.getElementById('error').innerText = `Usuário não cadastrado.`;
    }
  });
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    if (user) {
      window.location.href = '#home';
    }
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    if (errorCode === 'auth/user-not-found') {
      document.getElementById('error').innerText = `${error.message} - erro no login do google`;
    }
  });
}

function Login() {

  window.location.href = '#login';

  const login = `
    <section class ='initial-section'>
      <header >
      
      </header>
      <img class='img-section' src='img/logo.png'/>
      <div class="text">Bem vindo à maior rede social de educação do Brasil!</div>
      
      <form>
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
          class: 'primary-button',
          title: 'Entrar',
          onClick: userLogin,
        })}
      ${Button({
          class: 'google-login',
          title: '<img src="../img/google.png">',
          onClick: googleLogin,
        })}
        </form>

        <p class='login-error' id="error"></p>

      ${Link({
          class: 'register-link',
          hash: '#register',
          text: 'Registre-se',
        })}
    </section>
  `;

  return login;
}

export default Login;

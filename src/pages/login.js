import Button from '../components/button.js';
import Input from '../components/input.js';

function buttonLogin() {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;

    if (errorCode === 'auth/user-not-found') {
      alert('Usuário não encontrado!')
    } else if (errorCode === 'auth/invalid-email') {
      alert('Digite um e-mail válido!')
    } else if (errorCode === 'auth/wrong-password') {
      alert('Email ou senha inválido!')
    }
  });
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = '#home';
      //console.log('conecta')
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function () {});
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = '#home';
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
}

function Login() {
  const template = `
  <section class="login-layout">
      <img src='./images/life fitness-S.png' id="image"></img>
      <div class="container">
        <h2>Olá, bem vinda</h2>
        <form class="login-box">
          ${Input({
            class: 'input-email',
            placeholder: 'email',
            type: 'email',
          })}

          ${Input({
            class: 'input-password',
            placeholder: 'password',
            type: 'password',
          })}

          ${Button({ id: 'entrar', title: 'Entrar', onClick: buttonLogin })}
          ${Button({ id: 'google', title: 'Entrar com sua conta do Google', class: 'btn-google', onClick: googleLogin })}
        </form>
        <p>Não tem conta? <a href="#register">Registre-se</a></p>
      </div>
    </section>
  `;
  return template;
}
export default Login;
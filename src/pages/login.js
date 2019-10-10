import Button from '../components/button.js';
import Input from '../components/input.js';
import Register from './register.js';
import Home from './home.js'

function buttonLogin() {
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function () {
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = '#home';
      // User is signed in.
    } else {
      // No user is signed in.
    }
  }); 
}

function loginSocial() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function () {
  });
  firebase.auth().onAuthStateChanged(function(user) {
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
    <h1>InstaHealth</h1>
      <form class="login-card">
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

        ${Button({ id: '🎉', title: 'Entrar 🎉', onClick: buttonLogin })}
        ${Button({ id: 'google', title: 'Entrar com sua conta do Google', class: 'btn-google', onClick: loginSocial })}
    </form>
    <p>Criar conta<a href="#register">Registre-se</a></p>
  `;
  return template;
}
export default Login;

function locationHashChanged() {
  if (location.hash === '#register') {
    document.querySelector('main').innerHTML = Register();
  } else if (location.hash === '#home'){
    document.querySelector('main').innerHTML = Home()
  }
}


window.onhashchange = locationHashChanged;

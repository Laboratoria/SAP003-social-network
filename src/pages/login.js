import Button from '../components/button.js';
import Input from '../components/input.js';
//import Signup from './signup.js';


function loginUser() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((cred) => {
      localStorage.setItem('user', JSON.stringify(cred.user))
      // console.log(cred.user);
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          window.location = '#feed';
        }
      })
    })
    .catch(() => {
      const errorMessageField = document.getElementById('errorMessage')
      errorMessageField.textContent = 'email e/ou senha inválidos.';
      document.querySelector('.email-input').addEventListener('focus', () => {
        errorMessageField.textContent = '';
      })
    })
}

function register(){
  window.location = "signup"   
}

function signIn(provider) {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // window.location.hash="#feed"
      if (result.credential) {
        const token = result.credential.accessToken;
      }
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      alert(errorCode + errorMessage + email);
    });
}

function loginGoogleUser() {
  const provider = new firebase.auth.GoogleAuthProvider();
  signIn(provider);
}

function Login() {
  const userLogin = `
  ${Input({
    type: 'email',
    class: 'email-input',
    placeholder: 'Email',
  })}
  ${Input({
    type: 'password',
    class: 'password-input',
    placeholder: 'Senha',
  })}
  ${Button({
    class: 'btn',
    id: 'btn-log-in',
    onclick: loginUser,
    title: 'Login',
  })}
  ${Button({
    id: 'authGoogleButton',
    class: 'btn btn-lg btn-danger fa fa-google fa-2x',
    onclick: loginGoogleUser,
    title: '',
  })}
  `;
  const template = `

  <img src="./img/pluto-floral-and-botanical-growth.png">
  <h1>Horta Urbana</h1> 
  <form class="form-content">
  ${userLogin}
  <div id="errorMessage"></div>
  <p>Ainda não é membro?</p> 
  ${Button({
    class: 'btn',
    title: 'cadastre-se',
    onclick: register,
  })}
  </form>
  `;
  return template;
}
export default Login;

window.signIn = signIn;


import Button from '../components/button.js';
import input from '../components/input.js';


function Login() {
  const template = `
    
    
    <img class="logo" src="img/Logo2.jpeg"/>
    <div class ="welcome">Bem Vinda,</div>    
    <p class="login">Faça o login para continuar</p>
    <form>
    <h2 class="email-info">Login</h2>
    ${input({ class: 'email', type: 'email' })}
    <h2 class="pass-info">Senha</h2>
    ${input({ class: 'password', type: 'password' })}
    </form>
    ${Button({ class: 'send', onclick: sendLogin, title: 'ENVIAR' })}
    <p class="other-login">Ou entre com</p>
    ${Button({ class: 'google-btn', onclick: googleLogin, title: `<img src="img/Google.png"/>` })}
    <p class="register-link">Não é cadastrado? <a class="register-hash" href="#register">Registre-se</a></p>
    
  `;

  return template;
}

function sendLogin() {
  const emailValue = document.querySelector('.email').value;
  const passValue = document.querySelector('.password').value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passValue).then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // window.location.hash = '#register';
      }
    });
})};

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    let token = result.credential.accessToken;
    let user = result.user;
  }).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
    // ...
  });

};

export default Login
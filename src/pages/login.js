import Button from '../components/button.js';
import input from '../components/input.js';


function Login() {
  const template = `

    <img class="logo" src="img/Logo.png"/>
    <div class ="welcome">Boas vindas,</div>    
    <p class="login">Faça o login para continuar</p>
    <form>
    ${input({ class: 'email', placeholder: 'Login', type: 'email' })}<br>
    ${input({ class: 'password', placeholder: 'Senha', type: 'password' })}
    <p class='error'></p>    
    </form>
    ${Button({ class: 'send', onclick: sendLogin, title: 'Entrar' })}
    <p class="other-login">Ou faça login com as redes sociais</p>
    ${Button({ class: 'google-btn', onclick: googleLogin, title: `<img src="img/gbtn.png"/>` })}
    <p class="register-link">Não é cadastrado? <a class="register-hash" href="#register">Registre-se.</a></p>
    `;

  return template;
}

function sendLogin() {
  const emailValue = document.querySelector('.email').value;
  const passValue = document.querySelector('.password').value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passValue).then(() => {
      }).catch(() => {
        const erro = document.querySelector('.login-error');
        return erro.innerHTML = 'Login ou senha inválidos'
      })
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    let token = result.credential.accessToken;
    let user = result.user;
    window.location.hash = '#feed';
  }).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });

};

export default Login

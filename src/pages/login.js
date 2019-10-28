import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';
import loginGoogle from '../pages/google.js';
import loginFacebook from '../pages/facebook.js'


function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const senha = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(function () {
    uid = firebase.auth().currentUser.uid;
    if (uid != null) {      
      window.location = '#home.js';     
    }   
  }).catch(function(error) {     
    let errorCode = error.code;
    if (errorCode === 'auth/user-not-found') {
      alert('Usuário não encontrado!')
      window.location = '#home.js';     
    } else if (errorCode === 'auth/invalid-email') {
      alert('Digite um e-mail válido!')
      window.location = '#home.js';      
    } else if (errorCode === 'auth/wrong-password') {
      alert('Email ou senha inválido!')
      window.location = '#home.js';     
    }
  });
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {      
      window.location = '#home.js';
    } else {
      
    }
  });    
};

function login() {
  const template = `   
    <div class="login">
      ${Logo({ class: "logo"})}
    <div class="login-form">
    <br>
    <span class="phrase"> Mantenha na sua vida só o que lhe faz bem,
    <br>o que já fez troque com alguém!</br>
    <br>
    <span class= "access">LOGIN</span>
    <br>
    <form class="form-set">
      ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
      <br>
      ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}    
      <br>
      ${Button({ class: "primary-button", onClick: enviarLogin, title: 'ENVIAR',  })}
    </form>
    <span class= "access">OU ACESSE COM</span>
      <section class="auth">
        ${Button({ class: "auth-button", onClick: loginFacebook, title: '<i class="fab fa-facebook-square"></i>' })}   
        ${Button({ class: "auth-button", onClick: loginGoogle, title: '<i class="fab fa-google"></i>' })}
      </section>       
      <section class="register">Não tem uma conta? <a href="#register.js">REGISTRE-SE</a></section>
    </div>
    </div>
    `;  

  return template;
};

export default login;
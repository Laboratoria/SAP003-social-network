import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';
import ButtonAuth from '../components/button-auth.js';
import loginGoogle from './google.js';
import loginFacebook from './facebook.js';


function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const senha = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(function () {
    window.location = '#home.js';
    console.log(location);
   
  }).catch(function(error) {     
    let errorCode = error.code;
    if (errorCode === 'auth/user-not-found') {
      alert('Usuário não encontrado!')
      window.location = '#login.js';     
    } else if (errorCode === 'auth/invalid-email') {
      alert('Digite um e-mail válido!')
      window.location = '#login.js';      
    } else if (errorCode === 'auth/wrong-password') {
      alert('Email ou senha inválido!')
      window.location = '#login.js';      
    }
  });
  
  /* firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
      window.location = '#home.js';      
    } else {

    }
  }); */
    
}

function login() {
  const template = `   
    ${Logo()}
    <br>
    ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
    ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}    
    <br>
    ${Button({ onClick: enviarLogin, title: 'ENVIAR',  })}
    
    <span>OU ACESSE COM</span>
    <section class="auth">
    ${ButtonAuth({ onClick: loginFacebook, title: '<i class="fab fa-facebook-f"></i>' })}
    ${ButtonAuth({ onClick: loginGoogle, title: '<i class="fab fa-google"></i>' })}
    </section>       
   
    <section class="register">Não tem uma conta? <a href="#register.js">REGISTRE-SE</a></section>
  `;

  return template;
}

export default login;

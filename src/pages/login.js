import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';
import ButtonAuth from '../components/button-auth.js';
import buttonGoogle from './google.js';


function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const senha = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
    let errorCode = error.code;

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
      window.location = '#home.js';
      //console.log('conecta')
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });
    
}

function Login() {
  const template = `   
    ${Logo()}
    <br>
    ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
    ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}    
    <br>
    ${Button({ title: 'ENVIAR', onClick: enviarLogin })}
    
    <p>Ou acesse com...</p>
    
    ${ButtonAuth({ title: '<i class="fab fa-google-plus-square"></i>', onClick: buttonGoogle })}       
   
    <section>Não tem uma conta? <a href="#register.js">REGISTRE-SE</a></section>
  `;

  return template;
}

export default Login;

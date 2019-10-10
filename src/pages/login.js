import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';
import ButtonAuth from '../components/button-auth.js';
import Cadastro from './cadastro.js';
import buttonGoogle from './google.js';


function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const senha = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, senha).catch(function() {});
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('oioioioi')
      // User is signed in.
      // let displayName = user.displayName;
      // let email = user.email;
      // let emailVerified = user.emailVerified;
      // let photoURL = user.photoURL;
      // let isAnonymous = user.isAnonymous;
      // let uid = user.uid;
      // let providerData = user.providerData;
      // ...
    } else {
      console.log('Mano do céu no registro')
      // User is signed out.
      // ...
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
    ${Button({ title: 'Enviar', onClick: enviarLogin })}
    
    <p>Ou acesse com...</p>
    
    ${ButtonAuth({ title: '<i class="fab fa-google-plus-square"></i>', onClick: buttonGoogle })}       
   
    <section>Não tem uma conta? <a href="#cadastro.js">REGISTRE-SE</a></section>
  `;

  return template;
}

export default Login;

function locationHashChanged() {
  if (location.hash === '#cadastro.js') {
    document.querySelector('main').innerHTML = Cadastro();
  }   
}

window.onhashchange = locationHashChanged;

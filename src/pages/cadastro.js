import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';

function criarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const senha = document.querySelector('.js-password-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, senha);
  firebase.auth().onAuthStateChanged(function(user) {
    firebase.auth().currentUser;
    if (user != null) {
      email = user.email;
      senha = user.senha;      
      window.location = '#home.js';
      
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


function Cadastro() {
  const template = `   
    ${Logo()}
    <br>
    ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
    <br>
    ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}       
    <br>
    ${Button({ title: 'Criar', onClick: criarLogin })}    
   
  `;

  return template;
}

export default Cadastro;

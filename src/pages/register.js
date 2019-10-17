import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';

function criarLogin() {
  const name = document.querySelector('.js-namefull-input').value;
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function () {
    window.location = '#home.js';        

  })  
  .catch(function (error) {       
    let errorCode = error.code;    

    if (errorCode === 'auth/weak-password') {
      alert('A senha precisa ter no mínimo 6 dígitos!')      
      window.location = '#login.js';
      window.location = '#register.js';     
    } else if (errorCode === 'auth/invalid-email') {
      alert('Digite um e-mail válido!')
      window.location = '#login.js';
      window.location = '#register.js';      
    } else if (errorCode === 'auth/email-already-in-use') {
      alert('Este e-mail já foi utilizado!')
      window.location = '#login.js';
      window.location = '#register.js';      
    }
      
  });

  /* firebase.auth().onAuthStateChanged(function(user) {
    firebase.auth().currentUser;
    if (user != null) {
      console.log(user)
            
      window.location = '#home.js';
      
      // User is signed in.
      //let displayName = user.displayName;      
      // let email = user.email;
      // let emailVerified = user.emailVerified;
      // let photoURL = user.photoURL;
      // let isAnonymous = user.isAnonymous;
      // let uid = user.uid;
      // let providerData = user.providerData;
      // ...
    } else {
      
      window.location = '#login.js';
      
      // User is signed out.
      // ...
    }
  }); */
}


function register() {
  const template = `   
    ${Logo({ class: "logo"})}
    <br>  
    ${Input({ class: 'js-namefull-input', type: 'text', placeholder: 'Nome Completo' })}
    <br>  
    ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
    <br>
    ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}       
    <br>
    ${Button({ class: "primary-button", onClick: criarLogin, title: 'CADASTRAR' })}
    `;

  return template;
}

export default register;

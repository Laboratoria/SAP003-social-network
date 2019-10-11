import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';

function criarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // ...    
  });

  firebase.auth().onAuthStateChanged(function(user) {
    firebase.auth().currentUser;
    if (user != null) {
      let userEmail = user.email;
      let userPass = user.password;      
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
      console.log('Erro no cadastro')
      console.log(user)
      // User is signed out.
      // ...
    }
  });
}


function Register() {
  const template = `   
    ${Logo()}
    <br>
    ${Input({ class: 'js-email-input', type: 'email', placeholder: 'Email' })}
    <br>
    ${Input({ class: 'js-password-input', type: 'password', placeholder: 'Senha' })}       
    <br>
    ${Button({ title: 'CADASTRAR', onClick: criarLogin })}    
   
  `;

  return template;
}

export default Register;

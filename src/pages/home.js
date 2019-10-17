import Button from '../components/button.js';
import Input from '../components/input.js';

function signInWithEmailAndPassword() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((logedin) => {
      alert(`Bem vindo ${email}`);
      window.location.hash = '#database';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Usuario nao cadastrado');
      window.location.hash = '#register';
    }); email-password.html;
}

function logWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#database';
      const token = result.credential.accessToken;
      const user = result.user;
    
    }).catch((error) => {
    
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    
    });
}

function logWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  provider.setCustomParameters({
    display: 'popup',
  }); firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#database'
      const token = result.credential.accessToken;
      const user = result.user;
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      
    });
}

function callPage() {
  window.location.hash = '#register';
}



function Home() {
  const template = `
    <img class="image" src="Images/animals.jpg">
    <form class= "form">
      
      ${Input({
        class: 'js-email-input',
        placeholder: 'Email',
        type: 'email',
      })}
      ${Input({
        class: 'js-password-input',
        placeholder: 'Senha',
        type: 'password',
      })}
      ${Button({
        class: 'LoginAccount',
        title: 'Entrar',
        onClick: signInWithEmailAndPassword,
      })}
      <p class="loginOption">Ou entre com:<p>
      <div class="btn-position">
      ${Button({ 
        class: 'google',
        title: 'G', 
        onClick: logWithGoogle,
         
      })}
      ${Button({ 
        class: 'face', 
        title: 'F', 
        onClick: logWithFacebook 
      })}
      </div>
      <p class="loginOption">Ainda não tem conta? Registre-se.<p>

    </form>
  
  `;
  
  return template;
}



export default Home 

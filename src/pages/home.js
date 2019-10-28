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
      alert('Usuário não cadastrado');
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

function Home() {
  const template = `
  <div class="home-container">
    <img class="home-image" src="Images/animals.jpg">
    <form>
    <h1 class="home-title">Amigo Pet</h1>
      
      ${Input({
        class: 'js-email-input',
        placeholder: 'exemplo@exemplo.com.br',
        type: 'email',
      })}
      ${Input({
        class: 'js-password-input',
        placeholder: 'Senha',
        type: 'password',
      })}
      ${Button({
        class: 'btn-login-account',
        title: 'Entrar',
        onClick: signInWithEmailAndPassword,
      })}
      <p class="login-option">Ou entre com:<p>
      <div class="btn-google-line">
      ${Button({ 
        class: 'google',
        title: 'G', 
        onClick: logWithGoogle,        
      })}
      </div>
      <p class="login-option">Ainda não tem conta? <a href="#register"><strong>Registre-se!</strong></a></p>
    </form>
  </div>
  `;
  
  return template;
}

export default Home 
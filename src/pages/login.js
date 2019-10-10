import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  
  function login() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('certo');
      window.location.href = '#feed';
    }, (error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      document.querySelector('.error').textContent = errorMessage;
    });    
  }

  function google (){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      window.location.href = '#feed';
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
  
  const template = `
  
  <figure>
    <img class="logo" src="imagens/images.png"/> 
  </figure>

    <section class="box-login">
    <h1 class="title">&lt nomeee &gt</h1>
    <h3 class="subtitle">Bem vindo, viajante!</h3>
      <form>
        ${Input({ type: 'email', class: 'js-email-input', placeholder: ' Email' })}<br>
        ${Input({ type: 'password', class: 'js-password-input', placeholder: ' Password' })}<br>
        ${Button({ class: 'signIn', title: 'Log in', onclick: login })}
      </form>
      <p class="error"></p><br>
    <p>Entrar com a conta do Google</p><br>
    ${Button({ class: 'google', title: 'google', onclick: google })}<br>
    <p>Ainda não tem uma conta? <a href="#register">Create an Account</a></p>
    </section>
    `;
  window.location.href = '#login';
  return template;
}

export default Login;

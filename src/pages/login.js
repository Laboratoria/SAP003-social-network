import Button from '../components/button.js';
import Input from '../components/input.js';
import RoundButton from '../components/round-button.js';


function signIn() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log('certo');
  }, (error) => {
  // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    document.querySelector('.error').textContent = errorMessage;
  });
}

function google() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // document.querySelector('.greetings').innerHTML = `Olá ${user.displayName}`;
    // const test = document.querySelector('.greetings');
    // console.log(test)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location = '#feed';
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function Login() {
  const template = `
  <figure class="logo">
    <img src="imagens/figure2.jpg"/> 
  </figure>

    <section class="box-login">
      <h1 class="title">&lt nomeee &gt</h1>
      <h3 class="subtitle">Bem vindo, viajante!</h3>
        <form>
          ${Input({ type: 'email', class: 'js-email-input', placeholder: ' Email' })}<br>
          ${Input({ type: 'password', class: 'js-password-input', placeholder: ' Password' })}<br>
          ${Button({ class: 'signIn', title: 'Log in', onclick: signIn })}
       </form>
      <section class="error"></section><br>
      <section>Entrar com a conta do Google<br>
      
      ${RoundButton({icone:"fab fa-google", class:'google', title:"google", onclick: google })}
      </section>
    <p>Ainda não tem uma conta? <a href="#register">Create an Account</a></p>
    </section>
    `;
  window.location = '#login';

  return template;
}

export default Login;

/* eslint-disable indent */
import Button from '../components/button.js';
import Input from '../components/input.js';
import Div from '../components/div.js';
import Card from '../components/card.js';



function singInwithGoogleMail() {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    window.location.hash = "#home";

    // ...
  }).catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}

function createUserWithEmail() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log('resposta', response);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  console.log(email, password);
}
//fncao para o cadastro e retornar à home
// function backHome() {
//   window.location.hash = #home;
// }

function Login() {

  const buttons = Button({
      id: 'loginUser',
      title: '<p class="btn-login">Login</p>',
      onClick: createUserWithEmail, 
    }) + `<h3>Entre com</h3>` +    
    // Button({
    //   id: '🎉',
    //   title: '<i class="fa fa-envelope"></i>',
     // onClick: 
    Button({
      id: '🎉',
      title: '<i class="fa fa-google"></i>',
      onClick: singInwithGoogleMail,
    }); 
     
  const divButtons = Div(
    {
      class: 'form-group',
      content: buttons,
    },
  );

  const cardLogin = `
    ${Input({
      class: 'js-email-input',
      placeholder: 'email',
      type: 'text',
    })
    + Input({
      class: 'js-password-input',
      placeholder: 'password',
      type: 'password',
    }) + divButtons}`;

  const formContainer = Div({class:'form-container', content: cardLogin});
  const template = `
    <header class="top-Banner">
    <h1>Henrietta</h1>
    <h3>Bem-vinda(o)</h3>
    </header>
    <form>
      ${Card({
    children: formContainer,
  })}
    <p class="register">Não tem uma conta?<a href="#cadastro">Cadastre-se</a></p>
    <img src="pages/Telescope.png" alt="telescópio">
    </form>
  `;
  return template;
}

export default Login;

// import locationHasChange from '../main.js';
import Button from '../components/button.js';
import Input from '../components/input.js';

function login() {

  // criar hash para ir para a timeline.
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function (response) {
    if(response){
      location.hash = '#feed'
    }

  })
  
  .catch(function (error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorCode, errorMessage);
  });

}

function google (){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user
      if(result){
        location.hash = '#feed'
      }
  
    })
    
    .catch(function(error) {
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

  // window.addEventListener('hashchange', locationHasChange, false);
  // location.hash = '#Feed';

function TemplateLogin() {
  const template = `

    <img src="img/moviment.png" alt="Logo do Moviment" class="image-logo">
    <h4 class="text-main">Bem vinda, Moviment!</h4>
    <form class="form-login">
      ${Input({ class: 'js-email-input', placeholder: 'e-mail', type: 'email' })}
      ${Input({ class: 'js-password-input', placeholder: 'password', type: 'password' })}
      ${Button({ id: 'bt-login', title: 'log in', call: login })}
    </form>
    <p class="text-main">Pode acessar também com...</p>
    ${Button({ id: 'bt-google', title: 'Google', call: google })}
   
    <p class="text-main"><a href="#createAccount">Não tem uma conta?</a></p>
  `;

// window.location = "#createAccount";

  return template;
}

export default TemplateLogin;
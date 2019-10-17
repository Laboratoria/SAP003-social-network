import Button from '../components/button.js';
import Input from '../components/input.js';

function AuthEmailPassButton() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location.hash = '#feed';
      alert('Autenticado ' + email);
  })
  .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, verifique o e-mail e senha inseridos.')
  });
}

function Google (){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    window.location.hash = '#feed';
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}

function Login() {
  const template = `
    <img class='logo' src='logo1.png'/>
    <h2 class='content'>Seja bem-vinda(o)!</h2>
    <form class='content'>
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ class:'primary-button', title: 'Log In', onClick: AuthEmailPassButton})}
    <p>Ou entre com sua conta...</p>
    ${Button({ class: 'google-btn', title: '', onClick: Google})}
    <p>Ainda não tem uma conta?</p>
    <a href='#register'>Registre-se!</a>
    </form>`;

  return template;
}

export default Login;

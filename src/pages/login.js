import Button from '../components/button.js';
import Input from '../components/input.js';

function AuthEmailPassButton() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function () {
      window.location.hash = '#perfil';
      alert('Autenticado ' + email);
  })
  .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, verifique oo e-mail e senha inseridos.')
  });
}

function Google (){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}

function Login() {
  const template = `
    <h1 class='content'>RedeTech</h1>
    <h2 class='content'>Seja bem-vinda(o)!</h2>
    <form class='content'>
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ id: 'doing-login', title: 'Log In', onClick: AuthEmailPassButton})}
    ${Button({ id: 'google', title: 'Google', onClick: Google})}
    <a href='#register'>Registre-se</a>
    </form>`;

  return template;
}
  
export default Login;
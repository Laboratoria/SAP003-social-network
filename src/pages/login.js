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
      alert('Falha ao autenticar, verifique o erro no console.')
  });
}

function Google (){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
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

function Login() {
  const template = `
    <h1>Login</h1>
    <form>
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ id: 'doing-login', title: 'Log In', onClick: AuthEmailPassButton})}
    ${Button({ id: 'google', title: 'Google', onClick: Google})}
    <a href='#register'>Registre-se</a>
    </form>`;
  
  return template;
}
  
export default Login;
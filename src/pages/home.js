/* eslint-disable no-console */
import Button from '../components/button.js';
import Input from '../components/input.js';

function mudarPg() {
  window.location.href = '#cadastro';
}

function enviarLogin() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  console.log(email, password);
  window.location.href = '#feed';
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      // let errorMessage = error.message;
      console.log(errorCode);
    // ...
    });
}

function googleSignIn(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = '#feed';
  }).catch(function(error) {
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

function Login() {
  const template = `
  <h1> Rede Social</h1>
  <h2> Seja Bem vindx</h2>

  ${Input({
    class: 'email-input',
    placeholder: 'E-mail',
    type: 'text',
  })}
    ${Input({
    class: 'senha-input',
    placeholder: 'Senha',
    type: 'password',
  })} <br>
    ${Button({
    id: 'enviar',
    title: 'Login',
    onClick: enviarLogin,
  })}
    ${Button({
    id: 'cadastrar',
    title: 'Cadastrar',
    onClick: mudarPg,
  })}
  ${Button({
    id:'google',
    title:'Google',
    onClick: googleSignIn,
  })}
`;

  return template;
}

export default Login;

// Para desconectar um usuário, chame signOut:
/* firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
}); */

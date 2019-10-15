import Button from '../components/button.js';
import Input from '../components/input.js';

function mudarPg() {
  window.location.href = '#cadastro';
}

function enviarLogin() {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.senha-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    window.location.href = '#feed';
  })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode);
    // ...
    });
}

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = '#feed';
  }).catch(function (error) {
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
<main class="main">  
  <h1 class="titulo"> Funny Motivation </h1>
  <h2 class="subtitulo"> Seja Bem vindx </h2>
  <form class="form">
  ${Input({
    class: 'email-input',
    placeholder: 'E-mail',
    type: 'text',
  })}<br>
    ${Input({
    class: 'senha-input',
    placeholder: 'Senha',
    type: 'password',
  })} <br>
  <div class="button">
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
    </div>
  </form>
</main>  
  ${Button({
    id: 'google',
    title: '<i id = "google" class="fab fa-google-plus-square"></i>',
    onClick: googleSignIn,
  })}
`;

  return template;
}

export default Login;
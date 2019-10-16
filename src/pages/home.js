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

function googleSignIn(){

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
  <header>
    <img src="imagens/funnymot.jpg" class="logo">
  </header>
  <section>
  <h1 class = "name-page"> Funny Motivation</h1>
  <h3 class = "bem-vindx"> Seja Bem-vindxs</h3>
  <section>
  <section class="login-form">
  <form >

  ${Input({
    class: 'email-input',
    placeholder: ' E-mail',
    type: 'text',
  })}<br>
    ${Input({
    class: 'senha-input',
    placeholder: ' Senha',
    type: 'password',
  })}</form></section>
    <div class="btn btn-enviar">
    ${Button({
      class:'primary-button',
    id: 'enviar',
    title: 'Login',
    onClick: enviarLogin,
  })}</div>
    <div class="btn btn-google">
    <h5 class="ou-entre"> Ou entre com </h5>
    ${Button({
    id:'google',
    title:'<i class="fab fa-google"></i>',
    onClick: googleSignIn, 
  })}</div>
    <div class="btn btn-cadastrar">
  ${Button({
    id: 'cadastrar',
    title: 'Cadastre-se',
    onClick: mudarPg,
  })}</div>
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

// Para desconectar um usuário, chame signOut:
// firebase.auth().signOut().then(function() {
  // Sign-out successful.
//}).catch(function(error) {
  // An error happened.
// }); 

//CTRL K C - deixar parte selecionada comentada


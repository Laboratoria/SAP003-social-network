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

function Login() {
  const template = `
<main class="main">  
  <h1 class="titulo"> Rede Social</h1>
  <h2 class="subtitulo"> Seja Bem vindx</h2>
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

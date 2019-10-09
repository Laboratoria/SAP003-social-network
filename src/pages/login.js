import Button from '../components/button.js';
import Input from '../components/input.js';

function Login() {
  function changePage() {
    const email = document.querySelector('.js-email-input').value;
    const password = document.querySelector('.js-password-input').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      console.log('certo');
      window.location.href = '#feed';
    }, (error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  }
  const template = `
  <figure>
    <img class="logo" src="imagens/figure1.jpg" alt="logo-viagem"/>
  </figure>

    <section class="box-login">
    <h1 class="title"> nomeee </h1>
    <h3 class="subtitle">Bem vindo, viajante!</h3>
      <form>
        ${Input({ type: 'email', class: 'js-email-input', placeholder: 'email' })}
        ${Input({ type: 'password', class: 'js-password-input', placeholder: 'password' })}
        ${Button({ class: 'signIn', title: 'signIn', onclick: changePage })}
      </form>
      <a href="#register">Create an Account</a>
      </section>
    `;
  window.location.href = '#login';
  return template;
}

export default Login;

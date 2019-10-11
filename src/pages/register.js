import Button from '../components/button.js';
import Input from '../components/input.js';

function btnRegister() {
  let email = document.querySelector('.js-email-register').value;
  const password = document.querySelector('.js-password-register').value;
  let name = document.querySelector('.js-name-register').value;
  firebase.auth().createUserWithEmailAndPassword(email, password);
  firebase.auth().onAuthStateChanged(function (user) {
    firebase.auth().currentUser;
    if (user != null) {
      email = user.email;
      name = user.displayName;
      window.location = '#home';
      console.log(email, name)
    } 
    // else {
      //No user is signed in}
  });
}

function btnVoltar() {
  window.location = '#login';
}

function Register() {
  const template = `
    <h1>Registre-se!</h1>
    <form>
    ${Input({ type: 'text', class: 'js-name-register', placeholder: 'Digite seu nome' })}
    ${Input({ type: 'email', class: 'js-email-register', placeholder: 'Digite seu e-mail' })}
    ${Input({ type: 'password', class: 'js-password-register', placeholder: 'Digite a senha' })}

    ${Button({
    class: 'js-btn-register', title: 'Registrar', id: 'btnRegister', onClick: btnRegister,
  })}
    ${Button({
    class: 'js-btn-voltar', title: 'Voltar', id: 'btnVoltar', onClick: btnVoltar,
  })} 
    </form>
  `;
  return template;
}

export default Register;

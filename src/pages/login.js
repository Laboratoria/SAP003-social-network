import Button from '../components/button.js';
import Input from '../components/input.js';
import createLogin from './register.js';

function AuthEmailPassButton() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log(result);
      alert('Autenticado ' + email);
  })
  .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert('Falha ao autenticar, verifique o erro no console.')
  });
}

function Login() {
  const template = `
    <h1>Login</h1>
    <form>
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ id: 'doing-login', title: 'Log In', onClick: AuthEmailPassButton})}
    ${Button({ id: 'create-user-button', title: 'Criar Usuario', onClick: createLogin})}
    ${Button({ id: 'google', title: 'Google', onClick: createLogin})}
    </form>`;
  
  return template;
}
window.location.href = '#Login';

export default Login;

import Button from '../components/button.js';
import Input from '../components/input.js';
import AuthEmailPassButton from '../components/authentication.js';

function createLogin() {
  const email=document.querySelector('.js-email-input');
  const password=document.querySelector('.js-password-input').value;
  firebase.auth().createUserWithEmailAndPassword(email.value, password)
    .then(function (email){
      alert(`Bem vindo ` + email.value);
    })
      .cath(function (error){
        console.error(error.code);
        console.error(error.message);
        alert(`Falha ao cadastrar, verifique o erro no console`)
      });
}

function Login() {
  const template = `
    <h1>Login</h1>
    <form>
    ${Input({ class:'js-email-input', placeholder:'E-mail', type:'email', })}
    ${Input({ class:'js-password-input', placeholder:'Senha', type:'password', })}
    ${Button({ id: '🎉', title: 'Log In', onClick: AuthEmailPassButton})}
    ${Button({ id: '🎉', title: 'Criar Usuario', onClick: createLogin})}
    </form>`;

  return template;
}

export default Login;

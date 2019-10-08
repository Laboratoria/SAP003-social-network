import Button from '../components/button.js';
import Input from '../components/input.js';
import loginConfig from '../loginConfig.js'

function sendLogin(){
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password);
}

function Login() {
  const template = `
    <form class="container">
    ${Input({type:'email', placeholder: 'email', class: 'js-email-input'})}
    ${Input({type:'password', placeholder: 'password', class: 'js-password-input'})}
    ${Button({ type: 'submit', title: 'Login in', onClick: sendLogin})}
    </form>
  `;


  return template;
}

//firebase.auth(email, senha);

export default Login;

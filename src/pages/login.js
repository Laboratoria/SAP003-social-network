import Button from '../components/button.js';
import input from '../components/input.js';

function Login() {
  const template = `
    
    <h1>Login Page</h1>
    <form>
    ${input({class: 'email', placeholder: 'email', type: 'email'})}
    ${input({class: 'password', placeholder: 'password', type: 'password'})}
    ${Button({ id: 'send', title: 'ENVIAR' })}
    </form>
  `;

  return template;
}

function sendLogin (){
    const emailValue = document.querySelector(".email").value;
    const passwordValue = document.querySelector(".password").value;
    console.log(emailValue, passwordValue);
} 

export default Login;
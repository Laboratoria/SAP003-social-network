import Button from '../components/button.js';
import Input from '../components/input.js';



function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;

  console.log(email, senha);
};


function Login() {
  const template = `
    <h1>Home Page</h1>
    <form>
      ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
      ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
      ${Button({ id: '🎉', title: 'Login', onClick: pegarInput })}
    </form>
    `;
  return template;
}

// ${Card({ texto: 'banana e peixinho' })}



export default Login;


//onhashchange rotas por #

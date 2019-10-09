import Button from '../components/button.js';
// import Card from '../components/card.js';
import Input from '../components/input.js';


function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  // console.log(email, senha);
  localStorage.setItem('emailSalvo', email);
  localStorage.setItem('senhaSalvo', senha);
}


function Home() {
  const template = `
    <h1>Home Page</h1>
    <p>Esse é um exemplo 🍌</p>
    
      ${Input({
    class: 'js-email', id: 'teste2', placeholder: 'Email', type: 'email',
  })}
      ${Input({
    class: 'js-senha', id: 'teste', placeholder: 'Senha', type: 'password',
  })}
      ${Button({ id: '🎉', title: 'Login', onClick: pegarInput })}
    
  `;
  return template;
}
// ${Card({ texto: 'banana e peixinho' })}

export default Home;

// onhashchange rotas por #

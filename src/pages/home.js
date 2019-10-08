import Button from '../components/button.js';
// import Card from '../components/card.js';
import Input from '../components/input.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    <p>Esse é um exemplo 🍌</p>
    ${Input({ placeholder: 'Email', type: 'email' })}
    ${Input({ placeholder: 'Senha', type: 'password' })}
    ${Button({ id: '🎉', title: 'Login' })}
    `;
  return template;
}
// ${Card({ texto: 'banana e peixinho' })}

export default Home;

//onhashchange rotas por #

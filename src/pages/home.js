import Button from '../components/button.js';
import Input from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Input({class: email, placeholder: email, type: email})}
    ${Button({ id: '🐠', title: 'Botão 🐠' })}
    ${Button({ id: '🎉', title: 'Botão 🎉' })}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}



export default Home;
// mudança de pagina
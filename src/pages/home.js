import Button from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Button({ id: '🐠', title: 'Botão 🐠' })}
    ${Button({ id: '🎉', title: 'Botão 🎉' })}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Home;

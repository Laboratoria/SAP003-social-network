import Button from '../components/button.js';

function Login() {
  const template = `
    <h1>Login</h1>
    ${Button({ id: '', title: 'Botão ' })}
    ${Button({ id: '', title: 'Botão ' })}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Home;

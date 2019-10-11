import Button from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Button({ id: 'singOut', title: 'Sair', onClick: SingOut})}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

window.location.href = '#authentication';
export default Home;

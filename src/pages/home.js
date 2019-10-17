import Button from '../components/button.js';
import Input from '../components/input.js';

function sendPost() {
  const text = document.querySelector('.js-text');
  console.log(text)


}

function Home() {
  const template = `
    <h1>Home Page</h1>
    <form>
      ${Input({ class: 'js-text', type: 'text', placeholder: 'Digite aqui'})}
      ${Button({ id: '🐠', title: 'Botão 🐠', onClick: sendPost })}
    </form>
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Home;

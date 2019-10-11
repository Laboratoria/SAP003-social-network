import Button from '../components/button.js';
import Input from '../components/input.js';

const location = () => {
    location.hash = '';
}

function Home() {
    const template = `
    <form class="container">
    <p> Aqui vãos os posts </p>
    </form>
    ${Button({ type: 'button', title: 'Voltar', class: 'primary-button', onClick: location })}
  `;

    return template;
}

export default Home;


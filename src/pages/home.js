import Button from '../components/button.js';
import Input from '../components/input.js';

const location = () => {
    location.hash = '';
}

function Home() {
    const template = `
    <section class="container">
      <section class="container">
        <p> Aqui vãos os posts </p>
      </section>
      ${Button({ type: 'button', title: 'Voltar', class: 'primary-button', onClick: location })}
    </section>
  `;

    return template;
}

export default Home;

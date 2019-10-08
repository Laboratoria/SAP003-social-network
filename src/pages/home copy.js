import Button from '../components/button.js';
import Logo from '../components/logo.js';
import Input from '../components/input.js';

function Home() {
  const template = `
    ${Logo()}
    <br>
    ${Input()}
    <br>
    ${Button({ id: 'enviar', title: 'Enviar' })}
    
    <p>Ou acesse com...</p>
    <br>
    
  `;

  return template;
}

export default Home;

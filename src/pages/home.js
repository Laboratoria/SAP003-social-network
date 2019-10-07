import Button from '../components/button.js';
import Input from '../components/input.js';

function Home() {
  const template = `
    <section class="container">
    ${Input({id:'email'})}
    ${Input({id:'password'})}
    ${Button({ id: 'submit', title: 'Login in' })}
    </section>
  `;

  return template;
}


export default Home;

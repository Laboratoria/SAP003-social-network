import Button from '../components/button.js';
import Input from '../components/input.js';

function Home() {
  const template = `
  
    <section class="container">
    <h1>Login</h1>
    <form>
    ${Input({type:'email', class:'js-email',placeholder:'Email'})}
    ${Input({type:'password', class:'js-password', placeholder:'Senha'})}
    ${Button({ id: 'submit', title: 'Login in' })}
    </form>
    </section>
  `;

  return template;
}


export default Home;

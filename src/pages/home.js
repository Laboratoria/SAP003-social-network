import Register from '../components/register.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Register()}
  `;

  return template;
}

export default Home;

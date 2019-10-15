import Button from '../components/button.js';

function Home() {

  const template = `
    <h1>Feed</h1>
    ${Button({ id: '🐠', title: '' })}
    ${Button({ id:'x', title:'y' })}
  `;

  return template;
}

export default Home;
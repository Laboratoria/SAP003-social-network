import Button from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    <div id='button1'></div>
    <div id='button2'></div>
    <p>Esse é um exemplo 🍌</p>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = template;

  wrapper.querySelector('#button1').replaceWith(
    Button({ title: 'Botão 🐠', onClick: () => alert('🐠') }),
  );

  wrapper.querySelector('#button2').replaceWith(
    Button({ title: 'Botão 🎉', onClick: () => alert('🎉') }),
  );

  return wrapper;
}

export default Home;

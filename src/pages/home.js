import Button from '../components/button.js';

function teste() {
  console.log(location.hash)
}

function changePage () {
  window.location.href = '#register';
}
function Home() { 
  //location.hash = 'home';
  const template = `
    <h1>Home Page</h1>
    ${Button({ id: '🐠', title: 'Botão 🐠', onclick: teste})}
    ${Button({ id: '🎉', title: 'Botão 🎉', onclick: changePage })}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

export default Home;

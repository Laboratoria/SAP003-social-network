import Button from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Button({ id: 'banana', title: 'Botão peixe' })}
    ${Button({ id: 'festa', title: 'Botão festa' })}
    <p>Esse é um exemplo</p>`
  ;

  return template;
}

export default Home;

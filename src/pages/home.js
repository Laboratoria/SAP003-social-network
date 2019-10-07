import Button from '../components/button.js';

// function Home(){
//   const template = `
//   S{ ${Button({ id: '🐠', title: 'Botão 🐠' })}
//      ${Button({ id: '🎉', title: 'Botão 🎉' })}
//     <p>Esse é um exemplo 🍌</p>}
//     `;
//     return template;
// }
//
// export default Home;

function ButtonRegister() {
  const buttons = `
  <h2> Seja bem-vindo! </h2>
  ${Button({ id: 'button' title: 'Botão')}
   `;
return buttons;
}

export default ButtonRegister;

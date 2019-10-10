<<<<<<< HEAD
// import Button from '../components/button.js';
//
// function Home() {
//   const template = `
//     <h1>Login</h1>
//     ${Button({ id: '🐠', title: 'Botão 🐠' })}
//     ${Button({ id: '🎉', title: 'Botão 🎉' })}
//     <p>Esse é um exemplo 🍌</p>
//   `;
//
//   return template;
// }
//
// export default Home;
=======
import Button from '../components/button.js';

function Home() {
  const template = `
    <h1>Home Page</h1>
    ${Button({ id: 'singOut', title: 'Sair', onClick: SingOut})}
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

window.location.href = '#authentication';
export default Home;
>>>>>>> 406c9e5c3ceea29ecad43d0988a0e9d4047eabc7

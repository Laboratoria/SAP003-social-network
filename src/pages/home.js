import Button from '../components/button.js';
import Input from '../components/input.js';



function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  // localStorage.setItem('input-email', email);
  // localStorage.setItem('input-senha', senha);
  console.log(email, senha);
}

  // const maximoDeTentativas = 3;
  // const tentativaAtual = 1;

//   while (tentativaAtual <= maximoDeTentativas) {

//     if (email == localStorage.email && senha == localStorage.senha) {
//       alert("Bem vindo");
//       tentativaAtual = maximoDeTentativas;
//     } else {
//       if (tentativaAtual == 3) {
//         alert("Nº de tentativas utrapassado");
//       } else {
//         alert("Login invalido. Tente novamente");
//       }
//       tentativaAtual++
//     }

//   }
// 


function Login() {
  const template = `
    <h1>Home Page</h1>
    <p><a href= "#cadastro">Cadastre-se</a></p> 
    <form>
      ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
      ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
      ${Button({ id: '🎉', title: 'Login', onClick: pegarInput })}
    </form>
    `;
  return template;
}

export default Login;

 

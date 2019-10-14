/* eslint-disable no-plusplus */
import Button from '../components/button.js';
import Input from '../components/input.js';


/* function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  console.log(email, senha);

} */
/* function validarEmailESenha (){
  if (localStorage.setItem )
} */
// const maximoDeTentativas = 3;

function pegarInput() {
  const logado = {
    email: document.querySelector('.js-email').value,
    senha: document.querySelector('.js-senha').value,
  };

  const usuario = JSON.parse(localStorage.getItem('arrayUsuarios'));
  console.log(usuario);

  if (window.validaLogin(usuario, logado)) {
    localStorage.setItem('logado', JSON.stringify(logado));
    console.log(logado);
    // window.location.hash = '#home';
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

// function validarEmailESenha (){
//   if (localStorage.setItem )
// }
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


function logar() {
  const template = `
  <nav><img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt=""></nav>
  <div class="container-login">
    <h1>Base Sustentabilidade</h1>
    <h3>Bem vindo<h3>
    <div class="form">
    <form>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
    ${Button({ title: 'Login', onClick: pegarInput })}
    </form>
    <p>Você já possui conta? Não, então <a href= "#cadastro">cadastre-se</a> aqui!</p>
    </div> 
  `;
  return template;
}

export default logar;

function locationHashChanged() {
  if (location.hash === '#home') {
    document.querySelector('main').innerHTML = logar();
  }
}
window.addEventListener('hashchange', locationHashChanged, false);

window.validaLogin = (arrayUsuarios, logado) => {
  for (let i = 0; i < arrayUsuarios.length; i++) {
    if (logado.email === logado[i].email
      && logado.senha === logado[i].senha) {
      return true;
    }
  }
};

// const aray = [{email: "w@w", senha: "111"}
// {email: "e@e", senha: "222"}, {email: "a@a", senha: "333"}]
// const user = {email: "w@w", senha: "111"}
// for (let i of aray) {
//   console.log(i.email === user.email && )
//   console.log()
// }

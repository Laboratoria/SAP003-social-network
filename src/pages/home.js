import Button from '../components/button.js';
import Input from '../components/input.js';


window.validaLogin = (dados, logado) => {
  for (let i = 0; i < dados.length; i++) {
    if (logado.email === dados[i].email && logado.senha === dados[i].senha);
  }
};

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
  const usuario = JSON.parse(localStorage.getItem('arrayUsuarios'));
  const logado = {
    email: document.querySelector('.js-email').value,
    senha: document.querySelector('.js-senha').value,
  };

  console.log(logado);

  window.validaLogin = (arrayUsuarios) => {
    for (let i = 0; i < arrayUsuarios.length; i++) {
      if (logado.email === logado[i].email
        && logado.senha === logado[i].senha) {
        alert('logou!');''
      } else {
        alert('não logou');
      }
    }
  };

  if (window.validaLogin(usuario, logado)) {
    localStorage.setItem('logado', JSON.stringify(logado));
    console.log(logado);

  const dados = JSON.parse(localStorage.getItem('arrayUsuario'));
  if (window.validaLogin(dados, logado)) {
    localStorage.setItem('usuarioLogado', JSON.stringify(logado));
    window.location.hash = '#Login';
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

function logar() {
  const template = `

  <img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt="">
  <h1>Home Page</h1>
  <p><a href= "#cadastro">Cadastre-se </a></p> 
  <form>
  <nav><img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt=""></nav>
  <div class="container-login">
    <h1>Base Sustentabilidade</h1>
    <h3>Bem-vindo<h3>
    <div>
    <form class="form">
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
    ${Button({ title: 'Login', onClick: pegarInput })}
    </form>
    <p>Você já possui conta? Não, então <a href= "#cadastro">cadastre-se</a> aqui!</p>
    </div> 
    </div>
    <div class="img-footer">
    <img src="fotos/logo-half-2.png" alt="">
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



// const aray = [{email: "w@w", senha: "111"}
// {email: "e@e", senha: "222"}, {email: "a@a", senha: "333"}]

window.validaLogin = (arrayUsuarios, logado) => {
  for (let i = 0; i < arrayUsuarios.length; i++) {
    if (logado.email === logado[i].email
      && logado.senha === logado[i].senha) {
      return true;
    }
  }
};

// const user = {email: "w@w", senha: "111"}
// for (let i of aray) {
//   console.log(i.email === user.email && )
//   console.log()
// }

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
/* function pegarInput() {
  const email = document.querySelector('.js-email').value;
  const senha = document.querySelector('.js-senha').value;
  console.log(email, senha);
  
} */

/* function validarEmailESenha (){
  if (localStorage.setItem )
} */
// const maximoDeTentativas = 3;
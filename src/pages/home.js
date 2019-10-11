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
  <nav><img src="fotos/Logo-Base_Caixa_Baixa_V4.png" alt=""></nav>
  <div class="container-login">
    <h1>Base Sustentabilidade</h1>
    <h3>Bem vindo<h3>
    <div class="form">
    <form>
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-senha', placeholder: 'Senha', type: 'password' })}
    ${Button({ title: 'Login'  })}
    </form>
    <p><a href= "#cadastro">Cadastre-se</a></p>
    </div>
    </div> 
    `;
    return template;
}

export default Login;

 

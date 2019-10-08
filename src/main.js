import Home from './pages/home.js';

function init() {
  document.querySelector('main').innerHTML = Home();
}

window.addEventListener('load', init);

const loginCadastro = "geni";
const senhaCadastrada = "geni123";

const loginInformado = prompt("Coloque seu login");
const senhaInformada = prompt("Informe sua senha");

const maximoDeTentativas = 3;
const tentativaAtual = 1;

while(tentativaAtual <= maximoDeTentativas){
  const loginInformado = prompt("Informa seu login");
  const senhaInformada = prompt("Informe sua senha");

  if(loginCadastro == loginInformado && senhaCadastrada == senhaCadastro){
    alert("Bem vindo");
    tentativaAtual = maximoDeTentativas;
  }else {
    if(tentativaAtual == 3){
      alert("Nº de tentativas utrapassado");
    }else{
      alert("Login invalido. Tente novamente");
    }
    tentativaAtual++ }
}
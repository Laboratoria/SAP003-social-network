function Login(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `;

  return template;
}

window.Login = {
  handleClick: (id) => {
    console.log(`Esse é o meu botão ${id}`);
    return `Esse é o meu botão ${id}`;
  },
};

export default Login;

//Lógica do login

const loginCadastro = "geni";
const senhaCadastrada = "geni123";
/* const loginInformado = prompt("infome seu login");
const senhaInformada =  prompt("coloque sua senha") */;
const loginCadastro = 3;
const tentativaAtual = 1;

while(tentativaAtual){
  const loginInformado = prompt("Informa seu login");
  const senhaInformada = prompt("Informe sua senha");

  if(loginCadastro == loginInformado && senhaCadastrada == senhaInformada){
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
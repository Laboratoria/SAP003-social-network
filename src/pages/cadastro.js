import Input from '../components/input.js';
import Button from '../components/button.js';


function enviarCadastro() {

  let colecao = localStorage.getItem('colecaoDeUsuarios');
  
  colecao = JSON.parse(colecao);

  if (!Array.isArray(colecao)) {
    colecao = [];
  }
  

  const novoUsuario = {
    nome: document.querySelector('.js-nomeCadastro-input').value,
    sobrenome: document.querySelector('.js-sobrenomeCadastro-input').value,
    email: document.querySelector('.js-emailCadastro-input').value,
    password: document.querySelector('.js-novaSenhaCadastro-input').value,
    post: [],
    id: colecao.length
  };

  colecao.push(novoUsuario);
  localStorage.setItem('colecaoDeUsuarios', JSON.stringify(colecao));
  localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
  
  // console.log(colecao)
  
  window.location.hash = '#login';
}

function Cadastro() {
  const template = `
  <div class="container-cadastro">
  <h1 class="título-cadastro">Cadastre-se:</h1>
  <form class="cadastro"> 
  
     ${Input({
    class: 'js-nomeCadastro-input',
    placeholder: 'Nome',
    type: 'text',
  })}
  
     ${Input({
    class: 'js-sobrenomeCadastro-input',
    placeholder: 'Sobrenome',
    type: 'text',
  })}

     ${Input({
    class: 'js-emailCadastro-input',
    placeholder: 'Email',
    type: 'text',
  })}

     ${Input({
    class: 'js-novaSenhaCadastro-input',
    placeholder: 'Nova senha',
    type: 'password',
  })}
  
     ${Button({
    id: 'botãoCadastro',
    title: 'Cadastrar',
    onClick: enviarCadastro,
  })}
  
    </form>
    
    <p class= "mensagem-cadastro">Já tem conta? <a href="#login">Entrar</a> </p>
    </div>

    `;

  return template;
}

export default Cadastro;

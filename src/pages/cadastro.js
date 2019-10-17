import Input from '../components/input.js';
import Button from '../components/button.js';


function enviarCadastro() {

  /* pega a coleção do LS */
  let colecao = localStorage.getItem('colecaoDeUsuarios');
  /* converte a string em vetor */
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

  /* adiciona o novo usuario na colecao */
  colecao.push(novoUsuario);
  /* salva a coleção com o novo cadastro de volta no LS */
  localStorage.setItem('colecaoDeUsuarios', JSON.stringify(colecao));
  /* salva o novo usuario de forma isolada no LS, pois ele precisa estar logado */
  localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
  /* muda o hash do endereço para que a função trocaPagina()
  perceba a mudança e mude a página que estamos */
  
  console.log(colecao)
  /* caso não seja um vetor, transforma em um */
  
  window.location.hash = '#login';
}

function Cadastro() {
  const template = `
      <h1 class="título-cadastro">Cadastre-se:</h1>
     <form> 
  
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
      
    `;

  return template;
}

export default Cadastro;

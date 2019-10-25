import Input from '../components/input.js';
import Button from '../components/button.js';

function pegarInput() {
  let dadoslocal = JSON.parse(localStorage.getItem('cadastro'));

  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
    teste: [],
  };

  if (!dadoslocal) {
    dados.id = 0;
    dadoslocal = [dados];
  } else {
    dados.id = dadoslocal.length;
    dadoslocal.push(dados);
  }
  window.localStorage.setItem('cadastro', JSON.stringify(dadoslocal));
  window.location.hash = '#home';
}


function cadastrar() {
  const template = `
  <div class="container-cadastro">
  <img src="fotos/mia pose 1-01.png" class="mia" > 
  <form class="cadastro">
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}
    </form> 
    <p>Você já está registrado? Então venha<a href='#home'> logar</a> e fazer parte de um mundo mais sustentável.</p>
  </div>
  `;
  return template;
}


export default cadastrar;

/*   <div class= 'container-text'>
  <div  class='item'>
  <h1>Olá!<br> Eu sou a Mia e vou te contar o porquê precisamos do Base</h1>
  </div>
  <a href='#item-2' class='control-btn'>.</a>
  <div  class='item '>
  <p>O base, assim como outros aplicativos,
   utiliza o conceito de crowdsourcing,
   isso significa que, seus usuários passem as informações criando uma base de dados com avaliações.
   </p></div>
  <a href='#item-3' class='control-bt'>.</a>
  <div  class='item '>
  <p>Dessa forma, cada um de nós podemos preencher vários questionário de
  avaliações sobre o nível de sustentabilidade de estabelecimentos comerciais,
  turísticos e produtos.</p></div>
  <a href='#item-4' class='control-btn'>.</a>
  <div  class='item '>
  <p>Que lugares você tem frequentado?<br>Onde
  passou as últimas férias?<br>O que tem comprado no mercado?</p>
  </div>
  <a href='#item' class='control-btn'><img src="fotos/sairpq.png" alt=""></a>
  <div  class='item item-5'>
  <p>Venha avaliar e ajudar a direcionar o dinheiro dos
  consumidores para locais e produtos sustentáveis.</p>
  </div>
    </div> */

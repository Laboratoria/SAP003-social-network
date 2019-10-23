
import Input from '../components/input.js';
import Button from '../components/button.js';


function pegarInput() {
  let dadoslocal = JSON.parse(localStorage.getItem('cadastro'));

  const dados = {
    email: document.querySelector('.js-email').value,
    nome: document.querySelector('.js-nome').value,
    senha: document.querySelector('.js-senha').value,
    posts: [],
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
  <img src="fotos/mia pose 1-01.png" class="mia"> 
  <div class="text">
  <div class="wall wall-1" id="wall-1">
  <h1>Olá!<br> Eu sou a Mia e vou te contar o porquê precisamos do Base</h1>
  <a href="#wall-2">Avançar</a>
  </div>
  <div class="wall wall-2" id="wall-2">
  <p>O base, assim como outros aplicativos, utiliza o conceito de crowdsourcing, isso significa que, seus usuários passem as informações criando uma base de dados com avaliações.</p>
  <a href="#wall-3">Avançar</a>
  <a href="#wall-1">Voltar</a>
  </div>
  <div class="wall wall-3" id="wall-3">
  <p>Dessa forma, cada um de nós podemos preencher vários questionário de avaliações sobre o nível de sustentabilidade de estabelecimentos comerciais,turísticos e produtos.</p>
  <a href="#wall-4">Avançar</a>
  <a href="#wall-2">Voltar</a>
  </div>
  <div class="wall wall-4" id="wall-4">
  <p>Que lugares você tem frequentado?<br>Onde passou as últimas férias?<br>O que tem comprado no mercado?</p>
  <a href="#wall-5">Avançar</a>
  <a href="#wall-3">Voltar</a>
  </div>
  <div class="wall wall-5" id="wall-5">
  <p>Venha avaliar e ajudar a direcionar o dinheir dos consumidores para locais e produtos sustentáveis.</p>
  <a href="#cadastrar">Vem!</a>
  </div>
  </div> 
  <form class="cadastro">
    ${Input({ class: 'js-email', placeholder: 'Email', type: 'email' })}
    ${Input({ class: 'js-nome', placeholder: 'Nome completo', type: 'text' })}
    ${Input({ class: 'js-senha', placeholder: 'senha', type: 'password' })}
    ${Button({ title: 'Cadastre-se', onClick: pegarInput })}
    <p>Você já está registrado? Então venha<a href='#home'> logar</a> e fazer parte de um mundo mais sustentável.</p>
  </div>
  `;
  return template;
}

/* window.location = "#wall-1"; */

function locationHashChanged() {
  if (window.location.hash === '#cadastro') {
    document.querySelector('main').innerHTML = cadastrar();
  } else if (window.location.hash === '#login') {
    document.querySelector('main').innerHTML = Login();
  }
}

window.addEventListener('hashchange', locationHashChanged, false);

export default cadastrar;

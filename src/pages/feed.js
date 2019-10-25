import ButtonFeed from '../components/button-feed.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

function deletarPost(e) {
  const postId = parseInt(e.target.parentElement.id, 10);
  const objUsuario = JSON.parse(localStorage.getItem('cadastro'));
  const card = document.querySelector(`div[id='${postId}']`);

  let num = 0;
  objUsuario.forEach((usuario) => {
    num = usuario.posts.findIndex(post => post.id === postId);
    const arrayPostsUsuarios = usuario.posts;
    arrayPostsUsuarios.splice(num, 1);
  });

  localStorage.setItem('cadastro', JSON.stringify(objUsuario));
  card.remove();
}

function editarPost(e) {
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const postId = parseInt(e.target.parentElement.id, 10);
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);
  paragrafo.contentEditable = 'true';
  paragrafo.focus();
  paragrafo.onblur = () => {
    paragrafo.contentEditable = 'false';
  };

  paragrafo.addEventListener('keyup', () => {
    const indicePost = usuarioTotal[usuarioAtual].posts.findIndex(posts => posts.id === postId);
    usuarioTotal[usuarioAtual].posts[indicePost].publicacao = paragrafo.textContent;
    window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  });
}

function templatePosts(publicacao, id) {
  const template = `
    <article id='${id}'>
      <p data-id='${id}'>${publicacao}</p>
      ${ButtonFeed({ title: 'Deletar', onClick: deletarPost })}
      ${ButtonFeed({ title: 'Editar', onClick: editarPost })}
    </article>
  `;
  return `${Card({ children: template, id })}`;
}

function postarPublicacao() {
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const posts = usuarioTotal[usuarioAtual].posts;
  const post = {
    publicacao: document.querySelector('.post').value,
    id: new Date().getTime(),
  };

  posts.unshift(post);

  window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  document.querySelector('.post').value = '';
  document.getElementById('post').innerHTML = posts.map(elem => templatePosts(elem.publicacao, elem.id)).join('');
}


function mostrarPublicacao() {

  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const posts = usuarioTotal[usuarioAtual].posts;
  document.querySelector('.post').value = '';
  document.getElementById('post').innerHTML = posts.map(elem => templatePosts(elem.publicacao, elem.id)).join('');
}

function logout() {
  localStorage.removeItem('usuario');
  window.location.hash='#home';
}


function feed() {
  // retirar classe main do elemento main
  const template = `
    ${ButtonFeed({ title: 'Sair', onClick: logout })}
    ${Textarea({ class: 'post' })}
    ${ButtonFeed({ title: 'Compartilhar', onClick: postarPublicacao })}
    <p id='post'></p>
  `;
  return template;
}

window.templatePosts = templatePosts;
window.postarPublicacao = postarPublicacao;
window.mostrarPublicacao = mostrarPublicacao;


export default feed;

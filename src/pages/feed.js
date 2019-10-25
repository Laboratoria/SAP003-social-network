import ButtonFeed from '../components/button-feed.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

function deletarPost(e) {
  const postId = parseInt(e.target.parentElement.id, 10);
  const objUsuario = JSON.parse(localStorage.getItem('cadastro'));

  let num = 0;
  objUsuario.forEach((usuario) => {
    num = usuario.posts.findIndex(post => post.id === postId);
    const arrayPostsUsuarios = usuario.posts;
    arrayPostsUsuarios.splice(num, 1);
  });

  localStorage.setItem('cadastro', JSON.stringify(objUsuario));
}

function editarPost(e) {
  const postId = parseInt(e.target.parentElement.id, 10);
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);
  paragrafo.contentEditable = 'true';
  paragrafo.focus();

  // LOGICA QUE FIZ PARA SALVAR A POSTAGEM EDITADA, MAS NÃO TA FUNCIONANDO
  // paragrafo.onblur = () => {dd
  //   paragrafo.contentEditable = 'false';
  // },
  // const indicePost = window.usuarioTotal[window.usuarioAtual].posts.findIndex(posts => posts.id === postId);
  // window.usuarioTotal[window.usuarioAtual].posts[indicePost].publicacao = paragrafo.textContent;
  // window.localStorage.setItem('cadastro', JSON.stringify(window.usuarioTotal));
}

function templatePosts(publicacao, id) {
  const template = `
    <article id='${id}'>
      <p data-id='${id}'>${publicacao}</p>
      ${ButtonFeed({ title: 'Deletar', onClick: deletarPost })}
      ${ButtonFeed({ title: 'Editar', onClick: editarPost })}
    </article>
  `;
  return `${Card({ children: template })}`;
}

function postarPublicacao() {
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));

  const posts = usuarioTotal[usuarioAtual].posts;
  const post = {
    publicacao: document.querySelector('.post').value,
    id: new Date().getTime(),
  };
  document.querySelector('.post').value = '';
  posts.unshift(post);

  window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  document.getElementById('post').innerHTML = posts.map(elem => templatePosts(elem.publicacao, elem.id)).join('');
}

function feed() {
  // retirar classe main do elemento main
  const template = `
    ${Textarea({ class: 'post' })}
    ${ButtonFeed({ title: 'Compartilhar', onClick: postarPublicacao })}
    <p id='post'></p>
  `;
  return template;
}

window.templatePosts = templatePosts;
window.postarPublicacao = postarPublicacao;
window.usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));
window.usuarioAtual = JSON.parse(localStorage.getItem('usuario'));


export default feed;

// function logout() {
//   localStorage.removeItem('usuario');
//   ${Button({ title: 'Login', onClick: logout })}
//   window.location.reload();
// }

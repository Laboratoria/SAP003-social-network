import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));
const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));

function deletarPost(e) {
  const postId = parseInt(e.target.parentElement.id, 10);
  const objUsuario = JSON.parse(localStorage.getItem('cadastro'));
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);

  let num = 0;
  objUsuario.forEach((usuario) => {
    num = usuario.posts.findIndex(post => post.id === postId);
    const arrayPostsUsuarios = usuario.posts;
    arrayPostsUsuarios.splice(num, 1);
  });

  localStorage.setItem('cadastro', JSON.stringify(objUsuario));
  paragrafo.remove();
}

function editarPost(e) {
  const postId = parseInt(e.target.parentElement.id, 10);
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);
  paragrafo.contentEditable = 'true';
  paragrafo.focus();

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
      ${Button({ title: 'Deletar', onClick: deletarPost })}
      ${Button({ title: 'Editar', onClick: editarPost })}
    </article>
  `;
  return `${Card({ children: template })}`;
}

function postarPublicacao() {
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
  const template = `
    ${Textarea({ class: 'post' })}

    ${Button({ title: 'Compartilhar', onClick: postarPublicacao })}
    <p id='post'></p>
ster
  `;
  return template;
}

window.templatePosts = templatePosts;
window.postarPublicacao = postarPublicacao;


export default feed;

// function logout() {
//   localStorage.removeItem('usuario');
//   ${Button({ title: 'Login', onClick: logout })}
//   window.location.reload();
// }

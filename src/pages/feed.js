import Button from '../components/button.js';
import Input from '../components/input.js';

function salvar() {
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));

  const posts = usuarioTotal[usuarioAtual].posts;

  const post = {
    post2: document.querySelector('.post').value,
  };

  posts.push(post);
  window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  document.getElementById('banana').innerHTML = posts.map(elem => `<p>${elem.post2}</p>`).join('');
}

function postar() {
  const template = `
    ${Input({ class: 'post', placeholder: 'Postagem', type: 'text' })}
    ${Button({ title: 'Compartilhar', onClick: salvar })}
    <p id='banana'></p>
  `;
  return template;
}


export default postar;

/* Função logout para por no feed
 function logout() {
  localStorage.removeItem('usuario');
  ${Button({ title: 'Login', onClick: logout })}
  window.location.reload();
}
 */

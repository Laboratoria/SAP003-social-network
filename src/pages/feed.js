import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

export function salvar() {
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));

  const posts = usuarioTotal[usuarioAtual].posts;

  const post = {
    post2: document.querySelector('.post').value,
    id: new Date().getTime(),
  };

  posts.push(post);
  window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  document.getElementById('banana').innerHTML = posts.map(elem => `<p>${elem.post2}</p>`).join('');
}

function postar() {
  const template = `
    ${Textarea({ class: 'post' })}
    ${Button({ title: 'Compartilhar', onClick: salvar })}
    ${Card({ children: `<p id='banana'></p>` })}
    <p id='banana'></p>
  `;
  return template;
}

export default postar;
// function logout() {
//   localStorage.removeItem('usuario');
//   ${Button({ title: 'Login', onClick: logout })}
//   window.location.reload();
// }

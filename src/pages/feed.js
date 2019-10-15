
import Button from '../components/button.js';
import Input from '../components/input.js';

function salvar() {
  let postagem = JSON.parse(localStorage.getItem('post'));

  const post = {
    post2: document.querySelector('.post').value,
  };
  if (!postagem) {
    postagem = [post];
  } else {
    postagem.push(post);
  }
  window.localStorage.setItem('post', JSON.stringify(postagem));
  const amemSenhor = JSON.stringify(postagem);
  document.getElementById('banana').innerHTML = amemSenhor;
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

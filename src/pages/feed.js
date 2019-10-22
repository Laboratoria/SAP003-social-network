import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

function deletar(evento) {
  const postId = parseInt(evento.target.parentElement.id, 10);
  const objUsuario = JSON.parse(localStorage.getItem('cadastro'));

  let num = 0;
  objUsuario.forEach((usuario) => {
    num = usuario.posts.findIndex(post => post.id === postId);
    const arrayPostsUsuarios = usuario.posts;
    arrayPostsUsuarios.splice(num, 1);
  });

  localStorage.setItem('cadastro', JSON.stringify(objUsuario));



  // let t = []
  // const ttt = objUsuario.forEach(user => t.push(user.posts))
  // t[0].forEach((i) => {
  //   console.log(i.id);
  //   if (i.id === postId) {
  //     console.log('entrou', i);
  //   }
  // })
  

  // const lili = la.filter(user => user.posts.id === postId);
  // const teste = document.querySelectorAll('.primary-button');
  // const toto = Array.from(teste);
  // console.log(toto)
  // toto.forEach(i => i.addEventListener('click', testeClique));
}

function banana(post2, id) {
  const template = `
    <article id='${id}'>
      <p>${post2}</p>
      ${Button({ title: 'Deletar', onClick: deletar })}
    </article>
  `;
  return `${Card({ children: template })}`;
}

function salvar() {
  const usuarioAtual = JSON.parse(localStorage.getItem('usuario'));
  const usuarioTotal = JSON.parse(localStorage.getItem('cadastro'));

  const posts = usuarioTotal[usuarioAtual].posts;

  const post = {
    post2: document.querySelector('.post').value,
    id: new Date().getTime(),
  };

  posts.push(post);

  window.localStorage.setItem('cadastro', JSON.stringify(usuarioTotal));
  document.getElementById('banana').innerHTML = posts.map(elem => banana(elem.post2, elem.id)).join('');
  //  document.getElementById('banana').innerHTML = posts.map(elem => `<p>${elem.post2}</p>`).join('');
}

// function postar() {
//   const template = `
//     ${Textarea({ class: 'post' })}
//     ${Button({ title: 'Compartilhar', onClick: salvar })}
//     <p id='banana'></p>
//   `;
//   return template;
// }

function feed() {
  const template = `
    ${Textarea({ class: 'post' })}
    ${Button({ title: 'Compartilhar', onClick: salvar })}
    ${Card({ children: `<p id='banana'></p>` })}
    <p id='banana'></p>
  `;
  return template;
}

// ${Card({ children: `<p id='banana'></p>` })}
export default feed;

window.salvar = salvar;
// window.postar = postar;

// function logout() {
//   localStorage.removeItem('usuario');
//   ${Button({ title: 'Login', onClick: logout })}
//   window.location.reload();
// }

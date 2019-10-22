import Button from '../components/button.js';
import Input from '../components/input.js';



function sendPost() {
  const text = document.querySelector('.js-text').value;
  const id = firebase.auth().currentUser.uid;
  firebase.firestore().collection('posts').add({ text, user: id })
    .then((docRef) => {
      document.querySelector('ul').insertAdjacentHTML('afterbegin', `
        <li data-id='${docRef.id}'>
        ${text}
        ${window.button.component({
            dataId: docRef.id,
            title: 'Deletar',
            onClick: window.home.deletePost,
          })}
        </li>
      `);
      console.log('Document written with ID: ', docRef.id);
    });
}

function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  event.target.parentElement.remove();
  // document.querySelector(`li[data-id='${id}']`).remove();
}

function sendComment(event) {
  const id = event.target.dataset.id;
  const text = document.querySelector(`input[data-id='${id}']`).value;
  event.target.insertAdjacentHTML('afterend', `<li>${text}</li>`)
  firebase.firestore().collection(`posts/${id}/comments`).add({ text });
}

function Home(props) {
  let postsLayout = '';
  console.log(props.posts)
  props.posts.forEach((post) => {
    postsLayout += `
      <li data-id='${post.id}'>
        ${post.text}
        ${Button({ dataId: post.id, title: 'Deletar', onClick: deletePost })}
        <ul>
          <li>
            ${Input({ dataId: post.id, class: 'js-text', type: 'text', placeholder: 'Comentar aqui' })}
            ${Button({ dataId: post.id, title: 'Comentário', onClick: sendComment })}
            </li>
            ${post.comments.map(comment => `<li>${comment.text}</li>`).join('')}
        </ul>
      </li>
    `;
  });

  const template = `
    <h1>Home Page</h1>
    <form>
      ${Input({ class: 'js-text', type: 'text', placeholder: 'Digite aqui'})}
      ${Button({ id: '🐠', title: 'Botão 🐠', onClick: sendPost })}
    </form>
    <ul>${postsLayout}</ul>
    <p>Esse é um exemplo 🍌</p>
  `;

  return template;
}

window.home = {
  deletePost,
};

export default Home;

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

function Home(props) {
  let postsLayout = '';
  props.posts.forEach((doc) => {
    postsLayout += `
      <li data-id='${doc.id}'>
        ${doc.data().text}
        ${Button({ dataId: doc.id, title: 'Deletar', onClick: deletePost })}
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

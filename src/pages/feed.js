import Button from '../components/button.js';

const location = () => {
  location.hash = '';
}

const logout = () => {
  firebase.auth().signOut().then(() => {
    location.hash = ''
  }).catch((error) => {
    // An error happened.
  });
}

const newPost = () => {
  const db = firebase.firestore();
  const post = {
    //identificador do usuario no post e id do post
    text: document.querySelector('.add-post').value,
    time: new Date().getTime(),
    hour: new Date().toLocaleString('pt-BR').substring(0, 16)
  }
  db.collection('posts').add(post);

}

const postsTemplate = (data) => {
  document.querySelector('.posts').innerHTML +=
    `<p> ${data.text} | ${data.hour}</p>`

};

const showPosts = () => {
  const db = firebase.firestore();
  db.collection('posts').orderBy('time', 'desc').get().then((snapshot) => {
    snapshot.forEach(doc => {
      postsTemplate(doc.data());
    });
  });

}

function Feed() {
  const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({ type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost })}
        <div class="posts">  </div>
      </section>
      ${Button({ type: 'button', title: 'Logout', class: 'primary-button', onClick: logout })}
    </section>
  `;

  return template;
}
window.onload = showPosts;
window.onhashchange = showPosts;



export default Feed;

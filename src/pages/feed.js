import Button from '../components/button.js';

// let db = firebase.firestore();

const logout = () => {
  firebase.auth().signOut().catch((error) => {
    // console.log(error);
  });
};

const deletePost = (id) => {
  // console.log('deletou', id);  
  const db = firebase.firestore();
  db.collection('posts').doc(id).delete();
};

const postTemplate = (doc) => {
  document.querySelector('.posts').innerHTML
    += `<p data-id=${doc.id}> ${doc.data().name}<br>| ${doc.data().text} | ${doc.data().date}
    <button type='button' class='delete-btn' id=${doc.id}>X</button>
    </p>`;
  document.querySelectorAll('.delete-btn').forEach
  (cls => cls.addEventListener('click', e => deletePost(e.target.id)));
};

const showPosts = () => {
  const db = firebase.firestore();
  db.collection('posts').orderBy('timestamp', 'desc').get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        postTemplate(doc);
      });
    });
};

const newPost = () => {
  const postsSpace = document.querySelector('.posts');
  const textArea = document.querySelector('.add-post');
  const db = firebase.firestore();
  const post = {

    name: firebase.auth().currentUser.displayName,
    user: firebase.auth().currentUser.uid,
    text: textArea.value,
    timestamp: new Date().getTime(),
    date: new Date().toLocaleString('pt-BR').slice(0, 16),
  };
  db.collection('posts').add(post).then(() => {
    // app.showPosts();
    postsSpace.innerHTML = `<p> ${post.name}<br>| ${post.text} | ${post.date}</p>
    ${postsSpace.innerHTML}`;
    textArea.value = '';
  });
};

function Feed() {
  const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({
    type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost,
  })}
        <div class="posts">  </div>
      </section>
      ${Button({
    type: 'button', title: 'Logout', class: 'primary-button', onClick: logout,
  })}
    </section>
  `;

  return template;
}

window.onhashchange = showPosts;
window.onload = showPosts;

window.app = { postTemplate };

export default Feed;

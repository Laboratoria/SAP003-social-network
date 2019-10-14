import Button from '../components/button.js';


const location = () => {
  location.hash = '';
};

const logout = () => {
  firebase.auth().signOut().then(() => {
    location.hash = ''
  }).catch((error) => {
    // An error happened.
  });
};

const postTemplate = (data) => {
  document.querySelector('.posts').innerHTML
        += `<p> ${data.text} | ${data.date}</p>`;
};

const showPosts = () => {
  const db = firebase.firestore();
  db.collection('posts').orderBy('timestamp', 'desc').get()
.then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      postTemplate(doc.data());
    });
  });
};

const newPost = () => {
  const db = firebase.firestore();
  const post = {
    // id
    text: document.querySelector('.add-post').value,
    timestamp: new Date().getTime(),
    date: new Date().toLocaleString('pt-BR').slice(0, 16),
  };
  db.collection('posts').add(post).then(
    showPosts()
  );
};

function Feed() {
  const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({
 type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost 
})}
        <div class="posts">  </div>
      </section>
      ${Button({
 type: 'button', title: 'Logout', class: 'primary-button', onClick: logout 
})}
    </section>
  `;

  return template;
}

window.onhashchange = showPosts;
window.onload = showPosts;


export default Feed;

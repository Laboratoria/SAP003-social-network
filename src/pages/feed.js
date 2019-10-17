import Button from '../components/button.js';
import udButton from '../components/udButton.js';

const logout = () => {
  app.auth.signOut().catch((error) => {
    // console.log(error);
  });
};

const deletePost = () => {
  app.db.collection('posts').doc(id).delete().then(() => {
    document.getElementById(id).parentElement.parentElement.remove();
  });
};

const checkUser = (docUid) => {
  const user = app.auth.currentUser.uid;
  if (user !== docUid) {
    document.getElementsByName(docUid).forEach((bt) => {
      bt.remove();
    });
  }
};

const makePostEditable = () => { 
  document.getElementsByClassName(id)[0].firstChild.parentElement.contentEditable = true
  };
  
const saveEditPost = () => {
  const pText= document.getElementsByClassName(id)[0].firstChild.parentElement
  pText.contentEditable = false;
  const db = firebase.firestore();
  db.collection('posts').doc(id).update({text: pText.textContent, date: new Date().toLocaleString('pt-BR').slice(0, 16),})
}

const postTemplate = (doc) => {
  document.querySelector('.posts').innerHTML
    += `
    <div class='posted container-post' data-id=${doc.id}> 
      <p class='posted posted-name'> ${doc.data().name}
      ${udButton({type: 'button', class: 'delete-btn', name: doc.data().user, id: doc.id, onClick: deletePost, title: 'X' })}
      </p>
      <p class='posted text ${doc.id}'> ${doc.data().text} |</p>
      ${udButton({type: 'button', class: 'edit-btn', name: doc.data().user, id: doc.id, onClick: makePostEditable, title: 'Editar' })}
      ${udButton({type: 'button', class: 'save-btn', name: doc.data().user, id: doc.id, onClick: saveEditPost, title: 'Salvar' })}
      <p>${doc.data().date}</p>
    </div>`;

  checkUser(doc.data().user);
  checkUser(doc.data().user);
};

const showPosts = () => {
  app.db.collection('posts').orderBy('timestamp', 'desc').get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        postTemplate(doc);
      });
    });
};

const newPost = () => {
  const postsSpace = document.querySelector('.posts');
  const textArea = document.querySelector('.add-post');
  const post = {
    name: app.auth.currentUser.displayName,
    user: app.auth.currentUser.uid,
    text: textArea.value,
    timestamp: new Date().getTime(),
    date: new Date().toLocaleString('pt-BR').slice(0, 16),
  };
  app.db.collection('posts').add(post).then(() => {
    postsSpace.innerHTML = '';
    app.showPosts();
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

window.app = {
  showPosts,
  db: firebase.firestore(),
  auth: firebase.auth(),
};

export default Feed;
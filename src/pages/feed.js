import Button from '../components/button.js';
import udButton from '../components/udButton.js';

const logout = () => {
  app.auth.signOut().catch((error) => {
    // console.log(error);
  });
};

const deletePost = () => {
  const confirmDelete = confirm('Deseja mesmo deletar?')
  if(confirmDelete){
  app.db.collection('posts').doc(id).delete().then(() => {
    document.getElementById(id).parentElement.parentElement.remove();
  });}
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

const checkUserEdit = (doc) => {
  const user = app.auth.currentUser.uid;
  if (user == doc.user) {
    return `
      ${udButton({type: 'button', class: 'edit-btn', name: doc.user, id: doc.id, onClick: makePostEditable, title: 'Editar' })}
      ${udButton({type: 'button', class: 'save-btn', name: doc.user, id: doc.id, onClick: saveEditPost, title: 'Salvar' })}
    `;
  } 
  return '';
};

const checkUserDelete =(doc) =>{
  const user = app.auth.currentUser.uid;
  if (user == doc.user) {
    return `
  ${udButton({type: 'button', class: 'delete-btn', name: doc.user, id: doc.id, onClick: deletePost, title: 'X' })}`

}
return '';
};

const postTemplate = (doc) => {
  return `
    <div class='posted container-post' data-id=${doc.id}> 
      <p class='posted posted-name'> ${doc.name}
      ${checkUserDelete(doc)}
      </p>
      <p class='posted text ${doc.id}'> ${doc.text} |</p>
      ${checkUserEdit(doc)}
      <p>${doc.date}</p>
    </div>`;
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
  app.db.collection('posts').add(post).then((docRef) => {
    const docPost = {
      ...post,
      id: docRef.id
    }

    document.querySelector('.posts').insertAdjacentHTML('afterbegin', app.postTemplate(docPost))

    textArea.value = '';
  });
};

const Feed= (props)=> {
  let postsTemplate = '';
  props.posts.forEach((post) => {
    const docPost = {
      ...post.data(),
      id: post.id
    }
    postsTemplate += postTemplate(docPost)
  });

  const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({
    type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost,
  })}
        <div class="posts"> ${postsTemplate} </div>
      </section>
      ${Button({
    type: 'button', title: 'Logout', class: 'primary-button', onClick: logout,
  })}
    </section>
  `;

  return template;
}


window.app = {
  postTemplate,
  db: firebase.firestore(),
  auth: firebase.auth(),
};

export default Feed;
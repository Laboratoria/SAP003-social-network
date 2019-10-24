import Button from '../components/button.js';
import Textarea from '../components/textarea.js';


function saveComment() {
    const newComment = document.querySelector('.textarea-comment').value;
    const datasetid = event.target.dataset.id;
    db.collection('users').doc(auth.currentUser.uid).get().then((doc) => {
      const userName = doc.data().name;
      const docPost = db.collection('posts').doc(datasetid);
      docPost.update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          userName,
          newComment,
        }),
      });
    });
  }

function cancelComment() {
const datasetid = event.target.dataset.id;
document.getElementById(datasetid).querySelector('.comment-container').innerHTML = '';
}

function AddComment(postId) {
const commentArea = `
    ${Textarea({
    class: 'textarea-comment',
    placeholder: 'Escreva um comentário',
    value:''
})}
    ${Button({
    type: 'button',
    class: 'btn',
    id: 'btn-comment-post',
    dataId: postId,
    onclick: saveComment,
    title: 'Postar',
})}
    ${Button({
    type: 'button',
    class: 'btn',
    id: 'btn-comment-cancel',
    dataId: postId,
    onclick: cancelComment,
    title: 'Cancelar',
})}
`;
const createSection = document.getElementById(postId).querySelector('.comment-container');
createSection.innerHTML = `${commentArea}`;
}

function PrivacyPost(postId, option){
  const docPost = db.collection('posts').doc(postId);
  if(option === 'fa-globe'){
    //console.log('public');
    docPost.update({
      privacy: "public"
    });
  } else if(option === 'fa-lock') {
    //console.log('private');
    docPost.update({
      privacy: "private"
    });
  }
}

function saveEdit() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const saveEdit = document.querySelector('.edit-textarea').value;
  postText.innerHTML = `
  <p class='post-text'>${saveEdit}</p>
  `;
  firebase.firestore().collection('posts').doc(id).update({
    text: saveEdit,
  });
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
}

function cancelEdit() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const text = postText.textContent.trim();
  postText.innerHTML = `
  <p class='post-text'>${text}</p>
  `;
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
}

function EditPost(postId) {
  const id = postId;
  const postText = document.getElementById(id).querySelector('.post-text');
  const button = document.getElementById(id).querySelector('.edit-button');
  const text = postText.textContent;
  postText.innerHTML = `
  ${Textarea({
    class: 'edit-textarea',
    id: 'edit-textarea',
    placeholder: '',
    value: text,
  })}
  `;
  button.innerHTML = `
    ${Button({
    id: 'btn-save',
    class: 'btn save-btn',
    dataId: postId,
    onclick: saveEdit,
    title: 'Salvar',
  })}
    ${Button({
    id: 'btn-cancel',
    class: 'btn cancel-btn',
    dataId: postId,
    onclick: cancelEdit,
    title: 'Cancelar',
  })}
  `;
}

async function LikePost(postId) {
  const postsCollection = db.collection('posts');
  const actualPost = await postsCollection.doc(postId).get();

  postsCollection.doc(postId).get().then(doc => {
    let arrUsers = doc.data().user_likes;
    let thisUser = arrUsers.includes(auth.currentUser.uid);
    
    if(!thisUser) {
      console.log('foi');
      postsCollection.doc(postId).update({
          likes: ++actualPost.data().likes,
          user_likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.uid)
        });
      };
   });
}

function DeletePost(postId) {
  if (!confirm('Tem certeza que deseja excluir essa publicação?')) return;
  const postsCollection = firebase.firestore().collection('posts');
  postsCollection.doc(postId).delete().then(() => {
  })
    .catch((error) => {
      console.log(error);
    });
}

export { AddComment, PrivacyPost, EditPost, LikePost, DeletePost };
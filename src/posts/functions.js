import Button from '../components/button.js';
import Textarea from '../components/textarea.js';


function saveComment() {
    const newComment = document.querySelector('.textarea-comment').value;
    const idComment = newComment.replace(/\s/g, '');
    const datasetid = event.target.dataset.id;
    db
      .collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then(doc => {
        const userName = doc.data().name;
        const id = doc.id
        const docPost = db.collection('posts').doc(datasetid);
        docPost
          .update({
            comments: firebase.firestore.FieldValue.arrayUnion({
              userName,
              newComment,
              id,
              idComment
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
    class: 'textarea-comment edit-textarea',
    placeholder: 'Escreva um comentário',
    value:''
})}
  <div>
  ${Button({
  type: 'button',
  class: 'btn',
  id: 'btn-comment-cancel',
  dataId: postId,
  onclick: cancelComment,
  title: 'Cancelar',
})}
    ${Button({
    type: 'button',
    class: 'btn btn-gray',
    id: 'btn-comment-post',
    dataId: postId,
    onclick: saveComment,
    title: 'Postar',
})}
</div>
`;
const createSection = document.getElementById(postId).querySelector('.comment-container');
createSection.innerHTML = `${commentArea}`;
}

function DeleteComment(postid) {
  if (!confirm('Tem certeza que deseja excluir esse comentário?')) return;
  db
  const postDoc = db.collection('posts').doc(postid);
  postDoc
    .get()
    .then(d =>{
      let arrComments = d.data().comments;
      let targetObj = arrComments.find(c => c.idComment);
      console.log(targetObj);

      postDoc.update({
        comments: firebase.firestore.FieldValue.arrayRemove(targetObj)
      });
    });
}

function PrivacyPost(postId, option){
  const docPost = db.collection('posts').doc(postId);
    docPost.update({
      privacy: option
    });
}

function saveEdit() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const buttonPencil = document.getElementById(id).querySelector('.edit-post');
  const saveEdit = document.querySelector('.edit-textarea').value;
  postText.innerHTML = `
  <p class='post-text'>${saveEdit}</p>
  `;
  db
    .collection('posts')
    .doc(id)
    .update({
      text: saveEdit,
    });
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
  buttonPencil.style.display = 'block'; 
}

function cancelEdit() {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id).querySelector('.post-text');
  const buttonPencil = document.getElementById(id).querySelector('.edit-post'); 
  const text = postText.textContent.trim();
  postText.innerHTML = `
  <p class='post-text'>${text}</p>
  `;
  document.getElementById(id).querySelector('.edit-button').innerHTML = '';
  buttonPencil.style.display = 'block';
}

function EditPost(postId) {
  const id = postId;
  const postText = document.getElementById(id).querySelector('.post-text');
  const button = document.getElementById(id).querySelector('.edit-button');
  const buttonPencil = document.getElementById(id).querySelector('.edit-post');
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
    id: 'btn-cancel',
    class: 'btn cancel-btn',
    dataId: postId,
    onclick: cancelEdit,
    title: 'Cancelar',
  })}
  ${Button({
  id: 'btn-save',
  class: 'btn save-btn btn-gray',
  dataId: postId,
  onclick: saveEdit,
  title: 'Salvar',
})}
  `;
    buttonPencil.style.display = 'none';
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
  db
    .collection('posts')
    .doc(postId)
    .delete()
    .then()
    .catch((error) => {
      console.log(error);
    });
}

export { AddComment, DeleteComment, PrivacyPost, EditPost, LikePost, DeletePost };
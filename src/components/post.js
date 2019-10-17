import Button from './button.js';
import Textarea from './textarea.js';

function Post(props) {
  return `<div class="post" data-id="${props.dataId}">
  <span class="post-username">${props.username}</span>
  <span class="post-date">${props.date}</span>
  <span class="post-text" id="${props.dataId}" >${props.text}</span>
  ${Button({
    dataId: props.dataId,
    class: 'secundary-button',
    onClick: window.post.deletePost,
    title: 'Deletar',
  })}

  ${Button({
    dataId: props.dataId,
    class: 'secundary-button',
    onClick: window.post.editPost,
    title: 'Editar',
  })}

  ${Button({
    dataId: props.dataId,
    class: 'secundary-button',
    onClick: window.post.saveEditPost,
    title: 'Salvar',
  })}
  </div>`;
}

function deletePost (event){
  const id = event.target.dataset.id;
  firebase.firestore().collection('post').doc(id).delete();
  event.target.parentElement.remove();
}

const editPost = () => {
  const id = event.target.dataset.id;
  const postText = document.getElementById(id)
  postText.setAttribute('contentEditable', 'true');
 

};

const saveEditPost= ()=> {
  const id = event.target.dataset.id;
  const saveText = document.getElementById(id)
  const newText = saveText.textContent
  firebase.firestore().collection('post').doc(id).update({
    text: newText,
  });
  saveText.setAttribute('contentEditable', 'false');

}
window.post ={
  deletePost,
  editPost,
  saveEditPost
}

export default Post;

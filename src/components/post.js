import Button from './button.js';

function Post(props) {
  return `<div class="post" data-id="${props.dataId}">
  <span class="post-username">${props.username}</span>
  <span class="post-date">${props.date}</span>
  <span class="post-text">${props.text}</span>
  ${Button({
    dataId: props.dataId,
    class: 'primary-button',
    onClick: window.post.deletePost,
    title: 'Deletar',
  })}
  </div>`;
}

function deletePost (event){
  const id = event.target.dataset.id;
  firebase.firestore().collection('post').doc(id).delete();
  event.target.parentElement.remove();
}
window.post ={
  deletePost,
}

export default Post;

// function save() {
//   const id = event.target.dataset.id;
//   const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
//   const newText = postText.textContent;
//   firebase.firestore().collection('posts').doc(id).update({
//     text: newText,
//   });
//   postText.setAttribute('contentEditable', 'false');
//   document.getElementById(id).getElementsByClassName('edit-button')[0].innerHTML = '';
// }

// function cancel() {
//   const id = event.target.dataset.id;
//   const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
//   const text = postText.textContent;
//   postText.innerHTML = `
//   <p class='post-text'>${text}</p>
//   `;
//   postText.setAttribute('contenteditable', 'false');
//   document.getElementById(id).getElementsByClassName('edit-button')[0].innerHTML = '';
// }

// function editPost(postId) {
//   const id = postId;
//   const postText = document.getElementById(id).getElementsByClassName('post-text')[0];
//   const button = document.getElementById(id).getElementsByClassName('edit-button')[0];
//   postText.setAttribute('contenteditable', 'true');
//   button.innerHTML = `
//     ${Button({
//     id: 'btn-save',
//     class: 'btn save-btn',
//     dataId: postId,
//     onclick: save,
//     title: 'Salvar',
//   })}
//     ${Button({
//     id: 'btn-cancel',
//     class: 'btn cancel-btn',
//     dataId: postId,
//     onclick: cancel,
//     title: 'Cancelar',
//   })}
//   `;
// }
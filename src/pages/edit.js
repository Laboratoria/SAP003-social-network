//COM INPUT
// function editPost(postId) {
//   // const teste = "Socorro! SOS!"
//   const postText = document.querySelector('.post-text');
//   const textField = postText.textContent;
//   //const createtag = 
//   // const postsCollection = firebase.firestore().collection('posts');
//   // postsCollection.doc(postId).update({ text: teste });
//   console.log(postText);
//   console.log(textField);
//   postText.innerHTML = `
//   <form class="edit-section">
//   ${PostInput({
//   class: 'text-area',
//   id: 'post-text',
//   placeholder: '',
//   })}
//   </form>
//   <div class="edit-buttons">
//     ${Button({
//     id: 'btn-save',
//     class: 'btn save-btn',
//     // onclick: saveEdition,
//     title: 'Salvar',
//   })}
//     ${Button({
//     id: 'btn-cancel',
//     class: 'btn cancel-btn',
//     // onclick: cancelEdition,
//     title: 'Cancelar',
//   })}
//   </div>

// `;
// }

// function saveEdition() {
//   const newText = document.querySelector('.text-area').value;
//   const edited = document.querySelector('.edit-section');
//   edited.innerHTML = `
//     <p class='post-text'>${newText}</p>
//     `;
//   return edited;
// }

// function cancelEdition() {
//   document.querySelector('.edit-section').innerHTML = `
//     <p class='post-text'>${textField}</p>
//   `;
// }



function saveEdition() {
  const newText = document.querySelector('.text-area').value;
  const edited = document.querySelector('.edit-section');
  edited.innerHTML = `
      <p class='post-text'>${newText}</p>
      `;
}

function cancelEdition() {
  const newText = postText.setAttribute('contenteditable', 'false');
  const teste = postText.textContent;

  document.querySelector('.edit-section').innerHTML = `
      <p class='post-text'>${postText}</p>
    `;
}
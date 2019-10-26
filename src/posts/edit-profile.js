import Button from '../components/button.js';
import textarea from '../components/textarea.js';


function UserInfo() {
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then((doc) => {
    const username = `
  ${doc.data().name}
  `;
    document.querySelector('.profile-name').innerHTML = username.toUpperCase();
  });
}

function AddBio() {
  const user = auth.currentUser;
  db.collection('users')
  .doc(user.uid)
  .get()
  .then((doc) => {
    const userBiography = `
    <p class=“text-bio”>${doc.data().biography}</p>
    `;
    document.querySelector('.user-bio').innerHTML = userBiography;
    });
}

async function saveEditBio() {
  const user = auth.currentUser;
  const saveEdit = document.querySelector('.edit-textarea').value;
  await firebase.firestore().collection('users').doc(user.uid).update({
    biography: saveEdit,
  });
  document.querySelector('.user-bio').innerHTML = '';
  window.profile.AddBio()
  document.getElementById('btn-post').style.display = 'block';

}

function cancelEditBio() {
  window.profile.AddBio()
  document.getElementById('btn-post').style.display = 'block';
}

function editBio() {
  const user = auth.currentUser;
    db.collection('users')
    .doc(user.uid)
    .get()
    .then((doc) => {
      document.querySelector('.user-bio').innerHTML = `
      <form>
      ${window.textarea.component({
        class: 'edit-textarea',
        id: 'edit-textarea',
        placeholder: 'Fale de você, seus gostos, plantas favoritas, etc.',
        value: doc.data().biography,
      })}
      </form>
      
      ${window.button.component({
        id: 'btn-cancel',
        class: 'btn cancel-btn',
        onclick: profile.cancelEditBio,
        title: 'Cancelar',
      })}
      ${window.button.component({
        id: 'btn-save',
        class: 'btn save-btn btn-gray',
        onclick: profile.saveEditBio,
        title: 'Publicar',
        })
        }
      `;
      document.getElementById('btn-post').style.display = 'none';
    }); 
}
  
  function CreateBio() {
    const template = `
    ${Button({
      type: 'button',
      class: 'btn btn-gray btn-post',
      id: 'btn-post',
      onclick: editBio,
      title: 'Editar biografia',
    })}
    `;
    return template;
}
export { UserInfo, AddBio, CreateBio };

window.profile = {
  saveEditBio,
  cancelEditBio,
  editBio,
  AddBio,
};
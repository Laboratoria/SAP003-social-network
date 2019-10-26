import Button from '../components/button.js';
import Textarea from '../components/textarea.js';

function Feed() {
loadPost()
  const template =`
    <nav>
    <img class="logo-feed" src="img/collectio-symbol.png"/>
    <a href="#profile"><img class="profile-link" src="img/profile-btn.png"/></a>
    ${Button({ class: 'btn-logout', onclick:logOut,title: 'SAIR' })}
    </nav>
    <form id ="formPost">
    <input type="file" name="arquivos" class="image-btn" accept="image/png, image/jpeg"  multiple />
        ${Textarea({ class: 'post-textarea',  placeholder: 'O que tem de novidade?'})}
        ${Button({ class: 'send-btn', 
        onclick:formPost, 
        title:  `<img src="img/send-btn.png"/>` 
        })}
    </form>
    <div id="posts"></div>

    `
    return template;
  }

//essa percorre os posts do template e carrega eles
  function loadPost () {
      const collectionPost = firebase.firestore().collection('posts')
      collectionPost.orderBy('time', 'desc').get().then(snap => {
        snap.forEach(post => {
            addingPost(post);
    })
  }) 
  }
    
  
// essa função cria o objeto do post no banco de dados e adiciona o post atual no template
function formPost(){
  const id = firebase.auth().currentUser.uid
  const text = document.querySelector('.post-textarea').value;
  let img = document.querySelector('.image-btn').files[0];
  firebase.storage().ref().child(`${id}-${new Date().getTime()}.jpg`).put(img)
    .then(snapshot => {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        const post = {
          user: id,
          file: downloadURL,
          likes: 0,
          comments:[],
          text: text,
          time: new Date().toLocaleString('pt-BR'),
        }
        firebase.firestore().collection('posts').add(post)
          .then(res => {
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', `
            <section class='card-post'>
            <div class='card-texts'>
            <p class='post-text'>${post.text}</p>
            <img class='post-img' src='${post.file}' onload='loadImg'/>
            <p class='date-time'>${post.time}</p>
            <div class='likes'>${post.likes}</div>
            
              <div class='post-buttons'>
              ${Button.component({ class: 'btn-like', dataId: res.id, onclick:likePost, title: 'like' })}
                  ${Button.component({
                    dataId: res.id,
                    class: 'btn-delete',
                    onclick: deletePost,
                    title: 'excluir', 
                  })}
                  ${Button.component({
                    dataId: res.id,
                    class: 'btn-edit',
                    onclick: editPost,
                    title: 'EDITAR'
                  })}
                  ${Button.component({
                    dataId: res.id,
                    class: 'btn-save',
                    onclick: saveEditPost,
                    title: 'SALVAR'
                  })}
               </div>
            </div>
            </section>
            `)
          });
        console.log('File available at', downloadURL);
      });
    })

}
// esta busca os posts do banco de dados e posta todos na página
function addingPost(post){
  const listPost = document.querySelector('#posts');
  const templatePost = `
  <section class='card-post' data-id='${post.id}'>
    <div class='card-texts'>
      <p class='post-text' data-id='${post.id}'>${post.data().text}</p>
      <img class='post-img' src='${post.data().file}'/>
      <p class='date-time'>${post.data().time}</p>
      <div class='likes' data-id='${post.id}'>${post.data().likes}</div>

      <div class='post-buttons'>
      ${Button({ class: 'btn-like', dataId: post.id, onclick: likePost, title: 'like' })}
          ${Button({
        dataId: post.id,
        class: 'btn-delete',
        onclick: deletePost,
        title: ''
        })}
          ${Button({
        dataId: post.id,
        class: 'btn-edit',
        onclick: editPost,
        title: 'EDITAR'
        })}
        ${Button({
          dataId: post.id,
          class: 'btn-save',
          onclick: saveEditPost,
          title: 'SALVAR'
        })}
      </div>
    </div>
  </section>
  `
  listPost.innerHTML += templatePost
}


function likePost (event) {
  const postId = event.target.dataset.id;
  const likeElem = document.querySelector(`.likes[data-id='${postId}']`);
  const likeCounter = parseInt(likeElem.textContent) + 1;
  likeElem.textContent = likeCounter
  firebase.firestore().collection('posts').doc(postId).update({likes: likeCounter});
  let post = firebase.firestore().collection('posts').doc();
} 

// função de deletar 
function deletePost(event) {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
    document.querySelector(`.card-post[data-id='${id}']`).remove();
};

// função de editar
function editPost(event) {
  const id = event.target.dataset.id;
  const textPost = document.querySelector(`.post-text[data-id='${id}']`);
  textPost.setAttribute('contentEditable', 'true');
  textPost.focus()
  textPost.onblur = () => {
    textPost.setAttribute('contentEditable', 'false');
  }
};

// função de salvar a edição 
function saveEditPost(event) {
  const id = event.target.dataset.id;
  const saveText = document.querySelector(`.post-text[data-id='${id}']`);
  const newText = saveText.textContent;
  firebase.firestore().collection('posts').doc(id).update({
    text: newText,
  });
  saveText.setAttribute('contentEditable', 'false');
}

window.deletePost = deletePost;
window.editPost = editPost;
window.saveEditPost = saveEditPost;
window.likePost = likePost;


//Função de logout
function logOut () {
  firebase.auth().signOut();
}

export default Feed;



/* .card-post{
  background-color: #FFFFFF;
  border-radius: 5px;
  width: 40%;
  margin: 0;
  box-shadow: 0px 3px 4px #263238;
  } */
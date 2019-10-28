import Button from '../components/button.js';
function Profile (){
  loadPost();
    const template = `
    <nav>
      <img class="logo-feed" src="img/collectio-symbol.png"/>
      <a href="#feed"><img class="profile-link" src="img/feed.png"/></a>
      ${Button({ class: 'btn-logout', onclick:logOut,title: `<img src='img/logou.png'/>` })}
    </nav>
    <section class='profile-card'>
        <img class='profile-img' src='img/avatar.png'/>
        <p class='profile-name'>${window.name}</p>
    </section>
    <div id='userpost'></div>`

    return template
}

function loadPost() {
    const user = firebase.auth().currentUser;
    const collectionPost = firebase.firestore().collection('posts')
    collectionPost.orderBy('time', 'desc').get().then(snap => {

      snap.forEach(post => {

        if(post.data().user == user.uid){
          addingPost(post);
        }
  })
}) 
}

function addingPost(post){
  const listPost = document.querySelector('#userpost');
  const templatePost = `
  <section class='card-post' data-id='${post.id}'>
    <div class='card-texts'>
      <p class='post-text' data-id='${post.id}'>${post.data().text}</p>
      <img class='post-img' src='${post.data().file}'/>
      <p class='date-time'>${post.data().time}</p>
      <div class='likes' data-id='${post.id}'>${post.data().likes}</div>
      ${Button({ class: 'btn-like', dataId: post.id, onclick: likePost, title: '' })}
      <div class='post-buttons'>

          ${Button({
        dataId: post.id,
        class: 'btn-delete',
        onclick: deletePost,
        title: '',
        })}
          ${Button({
        dataId: post.id,
        class: 'btn-edit',
        onclick: editPost,
        title: '',
        })}
        ${Button({
          dataId: post.id,
          class: 'btn-save',
          onclick: saveEditPost,
          title: '',
        })}
      </div>
    </div>
  </section>
  `
  listPost.innerHTML += templatePost
}

//Função de logout
function logOut () {
  firebase.auth().signOut();
}

export default Profile
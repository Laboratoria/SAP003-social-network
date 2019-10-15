import Input from '../components/input.js';
import Button from '../components/button.js';
import PostCard from '../components/postcard.js';

function Post() {
   firebase.firestore().collection('Posts').get().then(
    (snap) => {snap.forEach((doc) => {
      console.log(doc);
      templatePosts({name: doc.data().name, post: doc.data().post})
      // document.querySelector("#history").innerHTML += doc.data().post
      // console.log(doc.data().post)
    });
  });
}

function templatePosts(props){
  const xuxu = document.getElementById("history")
  xuxu.innerHTML += PostCard(props)
}

// function Post() {
//   location.hash = 'post'
//   const template = `
//   <div class="box">
//   <header class="header"><img src="./Imagens/header-logo.png"></header>
//   <div class="description"></div>
//   <form class="primary-box">
//     ${Input({
//     class: 'js-post',
//     placeholder: 'O que quer compartilhar?',
//     type: 'text',
//   })}
//     ${Button({
//     id: 'share',
//     title: 'Compartilhar',
//     onClick: SharePost,
//   })}
//   </form>
//   <ul id="history">
//   </ul>
//   </div>`;
//
//   return template;
// }

function SharePost() {
  const postText = document.querySelector('.js-post');
  const email = firebase.auth().currentUser.emailVerified
  const codUid = firebase.auth().getUid(email);
  const time = firebase.firestore.FieldValue.serverTimestamp();
  const name = firebase.auth().currentUser.displayName;
  firebase.firestore().collection('Posts').add({
    name: name,
    user: codUid,
    data: time,
    likes: 0,
    post: postText.value,
    comments: []
  }).then(function () {
    console.log('Post Salvo');
  }).catch(function (error) {
    console.log('O erro é: ', error);
  })
  document.getElementById('history').innerHTML +=`<li>${postText.value}</li>`
  document.querySelector('.js-post').value = '';
}


/* function addPost() {
  firebase.firestore().collection('Posts').get().then(
    (snap) => {snap.forEach((doc) => {
      document.getElementById('history').innerHTML +=`<li>${doc.data().post}
    </li>`;});
  });
}*/


export default Post;

import Button from '../components/button.js';
import Post from '../components/post.js';

import PostList from '../components/post-list.js';


function SignOut () {
  firebase.auth().signOut().then(function() {
    window.location.hash = '#login'
    alert ('Agora tu saiu.')
  })
};

function Posts() {

  const dataBase = firebase.firestore();
  const textInput = document.querySelector('.textarea');
  const post = {
    text: textInput.value,
    likes: 0,
    coments: [],
    user_id: firebase.auth().currentUser.uid
  }
  console.log(post);
dataBase.collection('posts').add(post)
  .then(() => {
    app.PostList()
    console.log('Document written with ID: ', post.id);
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  })

};

function loadFeed(post) {
  dataBase.collection('posts').get().then((snap) => {
    snap.forEach((doc) => {
      console.log('${doc.data()}');
    });
    // firebase.firestore().collection('posts').add(post).then(res => {
    //   textInput.value = ''
    //   loadFeed()
    // })
  });
}

function Feed() {
  // const dataBase = firebase.firestore();
  // dataBase.collection('posts').get().then((snap) => {
  //   snap.forEach((doc) => {
  //     console.log('${doc.data()}');
    // });
  // });

  //dados firebase 

};
  

function Feed() {

  const template = `
    <h1>Feed</h1>
  ${Button({ title: 'Sair', class: 'primary-button', onClick: SignOut})}
    <h2>Post</h2>

  ${Post({ class: 'textarea', id: 'post-textarea', placeholder: 'Escreva aqui', type:'text'})}
  ${Button({ title: 'Postar', class: 'primary-button', onClick: Posts})}
  <div id='banana'></div>
`;

    return template;
};

// function teste() {
// firebase.firestore().collection('posts').get().then(snap => {snap.forEach(doc => {
// console.log()
//
//     //postList.innerHTML += postTemplate;
//   })});
// };
window.app={PostList}
export default Feed;

  ${Post({ class: 'textarea', placeholder: 'Escreva aqui', type:'text'})}  
  ${Button({ title: 'Postar', class: 'primary-button', onClick: Posts})}
  `;
  
   
    return template;
};

export default Feed;


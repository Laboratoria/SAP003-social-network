import Button from '..//components/button.js';

window.app = {
  loadPost: loadPosts,
};

function savePost() {

  const post = document.querySelector('.post').value;
  const uid = firebase.auth().currentUser.uid;

  db.collection('post').add({
    post: post,
    likes: 0,
    comments: [],
    uid: uid,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),    
  })
  .then(function (docRef) {
    app.loadPost()
  })
  document.querySelector('.post').value = '';  
};

function addPost(post) {
  const feed = document.querySelector('.feed');
  const feedPost = `
  <li class="post-list">
  <br>  
  ${post.data().post}
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ class: "button-feed", onClick: savePost, title:'💛' })} 
  ${post.data().likes}
  ${Button({ class: "button-feed", onClick: loadComments(post), title:'💬' })}
  ${post.data().comments} 
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
  </li>
  <br>
  `
  feed.innerHTML += feedPost;
};

function loadPosts() {
  document.querySelector('.feed').innerHTML = 'Carregando...';
  db.collection('post').orderBy('timestamp', 'desc').get()
  .then((snap) => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPost(post)
    })
  })
};

function loadComments(post){
  document.querySelector('.feed').innerHTML += `
  <br>
  <p class="border"></p>
  <br>
  `

}

export default savePost;
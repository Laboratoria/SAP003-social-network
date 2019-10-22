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
  <li data-id= '${post.id}' class="post-list">
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>

  <br>  
  ${post.data().post}
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ class: "button-feed", onClick: getCount(), title:'💛' })} 
  ${post.data().likes}
  ${Button({ class: "button-feed", onClick: loadComments(post), title:'💬' })}
  <p class="border"></p>
  
  ${post.data().comments}
  <br>
    </li>
  <br>
  `
  feed.innerHTML += feedPost;
};

function loadPosts() {  
  db.collection('post').orderBy('timestamp', 'desc').get()
  .then((snap) => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPost(post)
    })
  })
};

function loadComments(){
  document.querySelector('.feed').innerHTML += `
 
  ` 
}

function getCount() {
  return db.collection('post').get().then(snap => {
      let total_count = 0;
      snap.forEach(post => {
          total_count += post.data().count;
      });

      return total_count;
  });
}


export default savePost;

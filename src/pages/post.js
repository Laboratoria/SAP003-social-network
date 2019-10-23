import Button from '..//components/button.js';

window.app = {
  loadPost: loadPosts,
};

function savePost() {

  const post = document.querySelector('.post').value;
  const uid = firebase.auth().currentUser.uid;

  db.collection('post').add({
    post: post,
    idname: firebase.auth().currentUser.displayName,
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
    <span class= "idname">${post.data().idname}</span>
    <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
    <p class="border"></p>
    ${post.data().post}
    <br>  
    <br>
    <p class="border"></p>
    ${Button({ class: "button-feed", onClick: getLike, title:'💛' })} 
    ${post.data().likes}
    ${Button({ class: "button-feed", onClick: loadComments, title:'💬' })}
    <p class="border"></p>
    <span class= "idname"> Comentários </span>
    <br>
    ${post.data().comments}
    <br>
  </li>
    `
  feed.innerHTML += feedPost;
};

function loadPosts() {  
  db.collection('post').orderBy('timestamp', 'desc').get()
  .then(snap => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPost(post)
    })
  })
};

function loadComments(){
   db.collection('post').update({'post':firebase.firestore.FieldValue.arrayUnion("comments")
  });
  }

function getLike() {
    db.collection('post').get().then(snapshot => {
    let likes = 0;
      snapshot.forEach(doc => {
        likes += doc.data().count;
        });

        return likes;
    });
}

export default savePost;

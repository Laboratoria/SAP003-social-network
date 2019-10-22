import Button from '..//components/button.js';

window.app = {
  loadPost: loadPost,
  filterPost: filterPost
};

function savePost() {

  const post = document.querySelector('.post').value;
  const uid = firebase.auth().currentUser.uid;

  db.collection('post').add({
    post: post,
    likes: 0,
    comments: [],
    uid: uid,
    idname: firebase.auth().currentUser.displayName,
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
  <span class= "idname">${post.data().idname}:</span>
  <p class="border"></p>
  <div class="text-post">
  ${post.data().post}
  </div>
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ dataId: post.id, class: "button-feed", onClick: countLikes, title:'💛' })} 
  ${post.data().likes}
  ${Button({ dataId: post.id, class: "button-feed", onClick: savePost, title:'💬' })} 
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
    <ul class="comments">    
    </ul>   
  </li>
  <br>
  `
  feed.innerHTML += feedPost;
};

function addPostPro(post) {
  const feed = document.querySelector('.feed');
  const feedPost = `  
  <li data-id= '${post.id}' class="post-list">
  <span class= "idname">${post.data().idname}:</span>
  <p class="border"></p>
  ${post.data().post}
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ dataId: post.id, class: "button-feed", onClick: editPost, title:'🖍' })}
  ${Button({ dataId: post.id, class: "button-feed", onClick: saveEdit, title:'✅' })}  
  ${Button({ dataId: post.id, class: "button-feed", onClick: deletePost, title:'🗑' })}
  ${Button({ dataId: post.id, class: "button-feed", onClick: savePost, title:'🔒' })}   
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
    <ul class="comments">    
    </ul> 
  </li>
  <br>
  `
  feed.innerHTML += feedPost;
};

function loadPost() {  
  db.collection('post').orderBy('timestamp', 'desc').get()
  .then((snap) => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPost(post)
    })
  })
};


function filterPost() {
  const user = firebase.auth().currentUser.uid;  
  db.collection('post')    
  .where('uid', '==', user)  
  .get()
  .then((snap) => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPostPro(post)
    })
  })
}

function countLikes(event) {
  const id = event.target.dataset.id;  
  db.collection('post').doc(id).get()
  .then((post => {
    const countlike = (post.data().likes) + 1;
    db.collection('post').doc(id).update({
      likes: countlike
    });
    app.loadPost();
  }))  
}

/* function editPost(event) {
  const id = event.target.dataset.id; 
  const postEdit = document.querySelector('.text-post');
  postEdit.post.add('post-edit');
  postEdit.setAttribute('contenteditable', 'true');
  postEdit.focus()

  
}

function saveEdit() {
  console.log(ed)

  
} */

/* function editPost(event) {
  const id = event.target.dataset.id;  
  db.collection('post').doc(id).get()
  .then((post => {
    const postEdit = input
    db.collection('post').doc(id).update({
      post: postEdit
    });
    app.loadPost();
  }))
  
} */

function deletePost(event) {
  const id = event.target.dataset.id;  
  db.collection('post').doc(id).delete();  
  event.target.parentElement.remove();
}

export default savePost;

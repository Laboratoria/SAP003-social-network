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
  <li id='${post.id}' data-id= '${post.id}' class="post-list">
  <span class= "idname">${post.data().idname}:</span>
  <p class="border"></p>
  <div class="text-post" data-id='${post.id}'>
  ${post.data().post}
  </div>
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ dataId: post.id, class: "button-feed", onClick: countLikes, title:'💛' })} 
  ${post.data().likes}
  ${Button({ dataId: post.id, class: "button-feed", onClick: showComments, title:'💬' })} 
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
  <div class="border comments hideComments">
  <span class ="idname">Comentários</span>
  ${post.data().comments.map(c => `<p class="comment">${c}</p>`).join('')}
  <textarea name="post" class="post" placeholder="Comenta aqui! :)"></textarea>
      ${Button({ dataId: post.id, class: "button-send", onClick: saveComments, title:'<i class="fas fa-paper-plane"></i>' })}
    </div>
  </li>`
  
  feed.innerHTML += feedPost;
};

function showComments(){
  const post = document.getElementById(event.target.dataset.id);
  const comments = post.querySelector('.comments');
  if(comments.classList.contains('hideComments')){
    comments.classList.remove('hideComments');
    comments.classList.add('showComments');
  }else{
    comments.classList.remove('showComments');
    comments.classList.add('hideComments');
  }
}

function saveComments(event) {
  const id = event.target.dataset.id;
  const text = document.querySelector(`input[data-id='${id}']`).value;
  console.log(text);
 
} 
 
function addPostPro(post) {
  const feed = document.querySelector('.feed');
  const feedPost = `  
  <li data-id= '${post.id}' class="post-list">
  <span class= "idname">${post.data().idname}:</span>
  <p class="border"></p>
  <div class="text-post" data-id='${post.id}'>
  ${post.data().post}
  </div>
  <br>  
  <br>
  <p class="border"></p>
  ${Button({ dataId: post.id, class: "button-feed", onClick: editPost, title:'🖍' })}    
  ${Button({ dataId: post.id, class: "button-feed", onClick: deletePost, title:'🗑' })}
  ${Button({ dataId: post.id, class: "button-feed", onClick: savePost, title:'🔒' })}
  ${Button({ dataId: post.id, class: "button-save", onClick: saveEdit, title:'✅' })}   
  <span class="date-hour">${post.data().timestamp.toDate().toLocaleString('pt-BR')}</span>
    <ul class="comments">    
    </ul> 
  </li>
  <br>
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

function countLikes(event) {
  const id = event.target.dataset.id;  
  db.collection('post').doc(id).get()
  .then((post => {
    const countlike = (post.data().likes) + 1;
    db.collection('post').doc(id).update({
      likes: countlike
    });
    app.loadPosts();
  }))  
}

function editPost(event) {
  const id = event.target.dataset.id; 
  const postEdit = document.querySelector(`.text-post[data-id='${id}']`);
  const saveButton = document.querySelector(`.button-save[data-id='${id}']`);
  saveButton.classList.add('show');
  postEdit.setAttribute('contenteditable', 'true');
  postEdit.focus()  
}

function saveEdit() {
  const id = event.target.dataset.id;
  event.target.classList.remove('show');
  const post = document.querySelector(`.text-post[data-id='${id}']`).textContent.trim();
  db.collection('post').doc(id).update(post)  
}

function deletePost(event) {
  const id = event.target.dataset.id;  
  db.collection('post').doc(id).delete();  
  event.target.parentElement.remove();
}

export default savePost;

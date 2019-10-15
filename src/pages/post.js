window.app = {
  loadPost: loadPost,
};

function savePost() {

  const post = document.querySelector('.post').value;

  db.collection('post').add({
    post: post,
    //user_id: id.data,    
  })
  .then(function (docRef) {
    app.loadPost()
  })
  document.querySelector('.post').value = '';  
};

function addPost(post) {
  const feed = document.querySelector('.feed');
  const feedPost = `
  <li>
  ${post.data().post}
  </li>
  <br>
  `
  feed.innerHTML += feedPost;
};

function loadPost() {
  db.collection('post').get()
  .then((snap) => {
    document.querySelector('.feed').innerHTML = '';
    snap.forEach(post => {
      addPost(post)
    })
  })
};


export default savePost;
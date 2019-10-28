import Button from '../components/button.js';
import Input from '../components/input.js';



function timeline(){
    const template = `
    <nav>
    <ul class="nav-links">
     <li><a href="#">HOME</a></li>
     <li><a href="#">ALCATEIA</a></li>
     <li><a href="#">SAIR</a></li>          
   </ul>
   <div class="burger">
     <div class="line1"></div>
     <div class="line2"></div>
     <div class="line3"></div>
   </div>
</nav>
<h2> Ola, seja bem-vindo! </h2>
    <form class='postForm'><br>
    ${Input({placeholder:'Digite sua mensagem', type: 'text', class:'post', id:'textPost'})}
    ${Button({id: 'postForm', class: 'bntpost', title: 'Postar', onClick: formSubmit})}<br>
    </form>
    <ul class='postdiv'></ul>
    ${Button({id:'button', title:'Logout', class:'buttonlogout', onClick:logout})}
    `

    load()
      return template;
  }

export default timeline;


function logout(){
  firebase.auth().signOut().then(function() {
    window.location.hash='#home'
    
  }, function(error) {
    console.error('Sign Out Error', error);
  });
}
  
  
function formSubmit(){
  const text = document.querySelector('.post').value;
  const id= firebase.auth().currentUser.uid;
  const post = {
   text,
   user: id,
   likes: 0,
   comments:[]
   };
  firebase.firestore().collection('posts').add(post)
  .then((docRef) => {
    const printPost = document.querySelector('.postdiv');
    const template = `
    <div class='postCard'>
    <div class'postLikes' id='gostei${postId}'>${id}    <p class='likes'>Likes:${post.data().likes}</p></div>
    <div class='buttons'>
    ${window.button.component({dataId: postId,  class: 'like', title:'❤️', onClick: likePost})}
    ${window.button.component({dataId: postId, class: 'delete', title:'🗑️', onClick: deleteButton})}
    </div>
    <p class='text'>    
    ${post.data().text}  
    </p>
    
  </div>
      `
    printPost.innerHTML += template
  })
    text.value = ''
    
};

window.likePost =likePost
window.deleteButton = deleteButton


function load() {

  const postCollection = firebase.firestore().collection('posts')
  const user = firebase.auth().currentUser
  postCollection.where('user', '==', user.uid).get().then(snap => {
  snap.forEach(post => {
  addPost(post, post.id)
    })
   })
}

function addPost (post, postId) {
  const printPost = document.querySelector('.postdiv');
  const id= firebase.auth().currentUser.uid;
  const template = `
   
    <div class='postCard'>
    ${Button({dataId: postId, class: 'delete', title:'🗑️', onClick: deleteButton})}
    ${Button({dataId: postId,  class: 'like', title:'❤️', onClick: likePost})}  
    <div class'postLikes' id='gostei${postId}'>${id}    
    <p class='likes'>Likes:${post.data().likes}</p></div>
     
      <p class='text'>    
      ${post.data().text}  
      </p>
      
    </div>
    `
  printPost.innerHTML += template
}

function profile() {
  const user = firebase.auth().currentUser;
    
if (user != null) {
  name = user.displayName;
  const email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  
  console.log(email)
}
}


function deleteButton() {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete()
  event.target.parentElement.remove();
  
}

function likePost(event) {
  const id = event.target.dataset.id;
  const likeButton = document.querySelector(`#gostei${id}`)
  firebase.firestore().collection('posts').doc(id).get()
  .then((snap => {
    const counter = snap.data().likes + 1;
    firebase.firestore().collection('posts').doc(id).update({
      likes: counter
    })  
    
    likeButton.innerText =`Likes:${counter}`;
  }))
  
}

window.load = load;
import Button from '../components/button.js';
import Input from '../components/input.js';



function timeline(){
    const template = `
    <form>
    ${Input({placeholder:'Digite sua mensagem', type: 'text', class:'post', id:'textPost'})}
    ${Button({id: 'postForm', title: 'postar', onClick: formSubmit})}<br>
    </form>
    <ul class='postdiv'></ul>
    ${Button({id:'button', title:'Logout', class:'buttonlogout', onClick:logout})}
    `
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
    text.value = ''
    load()
};


function load() {

  const postCollection = firebase.firestore().collection('posts')
  const postList = document.querySelector('.postdiv')
  postCollection.get().then(snap => {
  snap.forEach(post => {
  addPost(post)
    })
   })
}

function addPost (post) {
  const printPost = document.querySelector('.postdiv');
  const id= firebase.auth().currentUser.uid;
  const template = `
    <div>${id}</div>
    <div>
      ${post.data().text}  
      ${Button({class: 'delete', title:'deletar', onClick: deleteButton})}
    </div>
    `
  printPost.innerHTML += template
}

function deleteButton() {
  const id = event.target.dataset.id;
  firebase.firestore().collection('posts').doc(id).delete();
  
}

window.load = load;

   
  
  
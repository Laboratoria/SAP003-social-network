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
    <form><br>
    ${Input({placeholder:'Digite sua mensagem', type: 'text', class:'post', id:'textPost'})}
    ${Button({id: 'postForm', title: 'postar', onClick: formSubmit})}<br>
    </form><br>
    <div id='posts'></div>
    ${Button({id:'button', title:'Logout', class:'buttonlogout', onClick:logout})}
    `
      return template;
  }

  export default timeline;
  

function logout(){
  let singout = document.querySelector('buttonlogout');
  firebase.auth().signOut(singout).then(function(user) {
    window.location.hash='#home'
    console.log(singout)
    alert('voce saiu da sua conta')
  }).catch(function(error) {
    // An error happened.
    alert('erro')
  });
  
  }
  
  
    function formSubmit(){
      const text = document.querySelector('.post').value;
      const id= firebase.auth().currentUser.uid;
      const post = {
      text,
      user: id,
    };
    firebase.firestore().collection('posts').add(post).then(doc => {
     console.log(doc);
    })
  };

 /* function postForm(event){
    event.preventDefault();
    const text = document.getElementById("textPost").value;
    const post = {
      text: text,
      user_id: "",
      likes: 0,
      comments:

    }
  })*/
// function loadData() {
//   const postCollection = firebase.firestore().collection('posts')
//   const postList = document.getElementById('posts')
//   postList.innerHTML = 'Carregando...'
//   postCollection.orderBy('timestop').get().then(snap => {
//     postList.innerHTML = ''
//     snap.forEach(post => {
//       addPost(post)
//     })
//   })
 
// }

// function addPost(post){
//   const postList= document.getElementById('posts');
//   const postTemplate = `
//   <li>
//     ${post.data().timestop.toDate().toLocalString("pt-BR")}:
//     ${post.data().text}
//     </li>
//     `
//     postList.innerHTML += postTemplate
// }

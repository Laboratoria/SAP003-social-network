import Button from '../components/button.js';
import Input from '../components/input.js';


function Feed(props) {
 let postsLayout = '';
  props.post.forEach((doc) => {
    console.log(props.post)
    postsLayout += `
    <section class="section-post">
      <div class="div-post">
          <p data-id='${doc.id}'>
              ${doc.data().text}
              
          </p>
        </div>
        ${window.button.component({
          dataId: doc.id,
          title:`👍${doc.data().likes}`,
          onClick: window.Feed.addLikes
     })}
        ${window.button.component({
             dataId: doc.id,
             title:'🗑️',
              onClick: window.Feed.deletePost
        })}
    </section>
    `
  });

  console.log(postsLayout)
    
  const template = `
  <header>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox"/> 
          <span></span>
          <span></span>
          <span></span>  
          <ul id="menu">
            <a href="#profile"><li>Perfil</li></a>
            <a href="#readme"><li>Sobre</li></a>
            <a href="#login"><li>Sair</li></a>
          </ul>
        </div>
      </nav>
    </header>

    <h1>Rede Social</h1>
    <h2>Posts</h2>
    ${Input({
    class: 'post-input',
    type: 'textarea',
    placeholder: 'comente algo :)',
      }) +
    Button({
      title: '<span>&#128172;</span>',
      onClick: saveData
    })}
    <div class='insert-post'>${postsLayout}</div> `;

  return template;
  }


export default Feed;

/*function loadPost () {
  const postList = document.querySelector('.post-input');
  const postCollection = firebase.firestore().collection('post');
    postCollection.get().then(snap => {
    postList.innerHTML = ""
    snap.forEach(post => {
      addPost(post)
    })
  })
} ok */

function saveData() {
  
  const postlist = document.querySelector('.post-input').value;
  
  const post = {  
    text: postlist,
    userID: firebase.auth().currentUser.uid,
    likes: 0,
    addeAt: new Date().toISOString()
  }
  document.querySelector('.insert-post').value = '';
  firebase.firestore().collection('post').add(post).then(docRef => {
    console.log(docRef.id);
    document.querySelector('.insert-post').innerHTML +=`
    <section class='section-post'>
    <div class='div-post'>
        <p data-id='${docRef.id}'>
            ${post.text}
        </p>
      </div>
      ${window.button.component({
        /*dataId: post.likes,*/
        dataId: docRef.likes,
        title:'👍',
         onClick: window.Feed.myFunction
   })}
      ${window.button.component({
           dataId: docRef.id,
           title:'🗑️',
            onClick: window.Feed.deletePost
      })}
  </section>` 

    
   
  })
}

function addLikes(){
  const id = event.target.dataset.id;
  let likeFirebase = firebase.firestore().collection('post').doc(id).get();

  /*likes ++;*/
}


function deletePost() {
  const id = event.target.dataset.id;
  firebase.firestore().collection('post').doc(id).delete();
  event.target.parentElement.remove();
  document.querySelector(`p[data-id='${docRef.id}']`).remove();
}


/*function validateInput() {
  const postlist = document.querySelector('.post-input').value;
  if (postlist == "") {
    alert('Por favor, preencha o campo para comentar.')
  }
}*/


// function sendPost() {
//   const text = document.querySelector('.js-text').value;
//   const id = firebase.auth().currentUser.uid;
//   firebase.firestore().collection('post').add({ text, user: id })
//     .then((docRef) => {
//       document.querySelector('ul').insertAdjacentHTML('afterbegin', `
//         <li data-id='${docRef.id}'>
//         ${text}
//         ${window.button.component({
//             dataId: docRef.id,
//             title: 'Deletar',
//             onClick: window.home.deletePost,
//           })}
//         </li>
//       `);
//       console.log('Document written with ID: ', docRef.id);
//     });
// }

window.Feed = {
  deletePost,
  addLikes,
};



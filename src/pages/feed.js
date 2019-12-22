import Button from '../components/button.js';
import Input from '../components/input.js';
function Feed(props) {
  let postsLayout = '';
   props.post.forEach((doc) => {
     console.log(doc);
     //._document.proto.fields.userID.stringValue
 
     postsLayout += `
     <section class='section-post'>      
     <p class='info-post' data-id='${doc.id}'>
     Postado por: ${doc.data().userEmail} | em ${doc.data().addeAt.toDate().toLocaleDateString()}
     às ${doc.data().addeAt.toDate().toLocaleTimeString()}
     </p>
       <div class='div-post'>
           <p data-id='${doc.id}'>
               ${doc.data().text}
           </p>
         </div>
         ${window.button.component({
           id: (doc.id + `-like`),
           dataId: doc.id,
           class: 'btn-like',
           title:`👍${doc.data().likes}`,
           onClick: window.Feed.addLikes
      })}
         ${window.button.component({
           dataId: doc.id,
           class: 'btn-delete',
           title:'🗑️',
           onClick: window.Feed.deletePost
         })}
    
     </section>
     `
   });

  const template = `
  <section>
  <header class="header-feed">
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
    <h1 class="title-feed">Rede Social</h1>
    </header>
    <div class="feed">
    <div class="publication">
    ${Input({
    class: 'post-input',
    type: 'textarea',
    placeholder: 'comente algo :)',
  }) +
    Button({
      class: 'button-input',
      title: '<span>&#128172;</span>',
      onClick: saveData
    })}
    </div>
    <div class='insert-post'>${postsLayout}</div> 
    </div>
    </section>`;

  return template;
}

export default Feed;

function saveData() {
  let postlist = document.querySelector('.post-input').value;
  const userEmail = firebase.auth().currentUser.email;
  const post = {
    userEmail: userEmail,
    text: postlist,
    userID: firebase.auth().currentUser.uid,
    likes: 0,
    addeAt: new Date()
  }
  document.querySelector('.insert-post').value = '';
  firebase.firestore().collection('post').add(post).then(docRef => {
    console.log(docRef.id);
    document.querySelector('.insert-post').innerHTML +=`
    <section class='section-post'>
    <p class='info-post' data-id='${docRef.id}'>
    Postado por: ${post.userEmail} | em ${post.addeAt.toLocaleDateString()}
    às ${post.addeAt.toLocaleTimeString()}
      </p>
    <div class='div-post'>
    <p data-id='${docRef.id}'>
    ${post.text}
    </p>
     </div>
      ${window.button.component({
        id: (docRef.id + `-like`),
        dataId: docRef.id,
        class: 'btn-like',
        title:`👍 ${post.likes}`,
         onClick: window.Feed.addLikes
   })}
      ${window.button.component({
        id: (docRef.id + `-delete`),
           dataId: docRef.id,
           class: 'btn-delete',
           title:'🗑️',
            onClick: window.Feed.deletePost
      })}
  </section>` 
  document.querySelector('.post-input').value=''
 })
 
}

function deletePost(docRef) {
  
  const id = event.target.dataset.id;
  firebase.firestore().collection('post').doc(id).delete();
  event.target.parentElement.remove();
  document.getElementById(id+`-delete`).remove();
}

function addLikes(){
  
  const id = event.target.dataset.id;
  firebase.firestore().collection('post').doc(id).get().then(post => {
    const postData = post.data();
    
    postData.likes++;
    document.getElementById(id+`-like`).innerHTML = `👍`+  postData.likes;

    firebase.firestore().collection('post').doc(id).update(postData);
  });
}

window.Feed = {
  deletePost,
  // countLikes,
  addLikes
};



import Button from '../components/button.js';
import Input from '../components/input.js';
import Div from '../components/div.js';

function Feed(props) {

  let postsLayout = '';
  props.post.forEach((doc) => {
    console.log(props.post)
    postsLayout += `
      <li data-id='${doc.id}'>
        ${doc.data().text}
     
      </li>
    `});
  const template = `
    <h1>Rede Social</h1>
    ${Input({
    class: 'post-input',
    type: 'text',
    placeholder: 'comente algo'
  }) +
    Button({
      title: 'enviar',
      onClick: saveData
    })}
    <div class='insert-post'>${postsLayout}</div> `;

  return template;
}

export default Feed;

/*function loadPost () {
  const postList = document.querySelector('.post-input');
  const postCollection = firebase.firestore().collection('post');
  // postList.innerHTML = 'Carregando...'
  postCollection.get().then(snap => {
    postList.innerHTML = ""
    snap.forEach(post => {
      addPost(post)
    })
  })
}*/

function saveData() {
  
  const postlist = document.querySelector('.post-input').value;
  
  const post = {  
    text: postlist,
    userID: firebase.auth().currentUser.uid,
    likes: 0,
    addeAt: new Date().toISOString()
  }
  firebase.firestore().collection('post').add(post).then(result => {
    console.log(result.id);
    document.querySelector('.insert-post').innerHTML +=`<section >
<p>${post.text}</p>
</section>` 
  })
}


/*function addPost(post) {
    const postTemplate = `<li>
    ${post.data().text}
    ${post.data().likes}
    </li>
    `;
}*/


// import Button from '../components/button.js';
// import Input from '../components/input.js';

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

// function deletePost(event) {
//   const id = event.target.dataset.id;
//   firebase.firestore().collection('post').doc(id).delete();
//   event.target.parentElement.remove();
//   document.querySelector(`li[data-id='${id}']`).remove();
// }

// function Feed(props) {
//   let postsLayout = '';
//   props.posts.forEach((doc) => {
//     postsLayout += `
//       <li data-id='${doc.id}'>
//         ${doc.data().text}
//         ${Button({ dataId: doc.id, title: 'Deletar', onClick: deletePost })}
//       </li>
//     `;
//   });

// const template = `
//     <h1>Home Page</h1>
//     <form>
//      ${Input({ class: 'js-text', type: 'text', placeholder: 'Digite aqui'})}
//       ${Button({ id: '🐠', title: 'Botão 🐠', onClick: sendPost })}
//     </form>
//     <ul>${postsLayout}</ul>
// 	  `;


//   return template;
// }


// window.feed = {
//   deletePost,
// };

//export default Feed;

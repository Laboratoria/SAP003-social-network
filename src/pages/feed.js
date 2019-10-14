import Button from '../components/button.js';

;
const location = () => {
    location.hash = '';
}

const logout= ()=>{
  firebase.auth().signOut().then(function() {
    location.hash=''
  }).catch(function(error) {
    // An error happened.
  });
}
const newPost = () => {
  const db = firebase.firestore();
  const post={
    text: document.querySelector('.add-post').value,
    date: new Date().toTimeString().substring(0,5)
  }
 db.collection('posts').add(post);
 document.querySelector('.posts').innerHTML +=
 `<li> ${post.text} | ${post.date}</li>`
}

function Feed() {
    const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({ type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost })}
        <ul class="posts">  </ul>
      </section>
      ${Button({ type: 'button', title: 'Logout', class: 'primary-button', onClick: logout })}
    </section>
  `;

    return template;
}




export default Feed;

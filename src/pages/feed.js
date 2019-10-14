import Button from '../components/button.js';


const location = () => {
  location.hash = '';
}

const logout = () => {
  firebase.auth().signOut().then(function () {
    location.hash = ''
  }).catch(function (error) {
    // An error happened.
  });
}

const newPost = () => {
  const db = firebase.firestore();
  const post = {
    //id
    text: document.querySelector('.add-post').value,
    day: new Date().toLocaleDateString(),
    hour: new Date().toTimeString().substring(0, 5)
  }
  db.collection('posts').add(post);
}

const showPosts = () => {
  const db = firebase.firestore();
  db.collection('posts').orderBy('day').orderBy('hour','asc').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      document.querySelector('.posts').innerHTML +=
        `<p> ${doc.data().text} |${doc.data().day}| ${doc.data().hour}</p>`

    });
  });

}

function Feed() {
  const template = `
    <section class="container">
      <section class="container">
      <textarea class="add-post" placeholder="O que você está ouvindo?"></textarea>
      ${Button({ type: 'button', title: 'Postar', class: 'primary-button', onClick: newPost })}
        <div class="posts">  </div>
      </section>
      ${Button({ type: 'button', title: 'Logout', class: 'primary-button', onClick: logout })}
    </section>
  `;

  return template;
}

window.onhashchange = showPosts;



export default Feed;

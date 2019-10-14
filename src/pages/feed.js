import Button from '../components/button.js';


function logOut() {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem('user')
      console.log('adeus');
      auth.onAuthStateChanged(function(){
        window.location = '#login';
      })
    })
}

function userInfo() {
  const user = auth.currentUser;
  db.collection('users').doc(user.uid).get().then(doc => {
    const username = `
    <h4>${doc.data().name}</h4>
    <p>${user.email}</p>
    `;
    document.querySelector('.profile').innerHTML = username;
  });  
}

function publishText() {
  console.log('publicou');
  const userText = document.getElementById('user-publication').value;
  db.collection('publi').add({
    text: userText,
  });
}

function Feed() {
  const template = `
  <div class='profile'></div>
  <form class='publications'>
    <textarea id='user-publication'>
    ${Button({ id: 'btn-publish', onclick:publishText, title: 'Publicar'})};
  </form>
  ${Button({ id: 'btn-log-out', onclick:logOut, title: 'Sair'})}
  `;
  userInfo()
  return template;
}

export default Feed;
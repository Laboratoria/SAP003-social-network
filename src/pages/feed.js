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
/*
//função para eventlistener do botão Publicar
function publishText() {
  console.log('publicou');
  const userText = document.getElementById('user-publication').value;
  db.collection('publi').add({
    text: userText,
    likes: 0,
    comments: [],
    user-id: current user displayName
  });
}
*/
function Feed() {
  const template = `
  <div class='profile'></div>
  ${Button({ id: 'btn-log-out', onclick:logOut, title: 'Sair'})}
  `;
  userInfo()
  console.log(firebase.auth().currentUser)
  return template;
}

export default Feed;
import Button from '../components/button.js';


function logOut() {
  auth
    .signOut()
    .then(() => {
      localStorage.removeItem('user')
      console.log('adeus');
      firebase.auth().onAuthStateChanged(function(){
          window.location = '#login';
    })
  })
}

function Signout() {
  return Button({ id: 'btn-log-out', onclick:logOut, title: 'Sair'});
}

export default Signout;
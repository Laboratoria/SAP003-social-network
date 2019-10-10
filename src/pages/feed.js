import Button from '../components/button.js';

function Feed() { 
  
  function logout () {
    firebase.auth().signOut().then(function() {
      window.location.href = '#login';
      // Sign-out successful.
    }).catch(function(error) {
      console.log(error)
      // An error happened.
    });
  }

  
  const template = `
      <h1>Olá</h1>
      <p>Esse é o feed 🍌</p>
      ${Button({ class: 'signIn', title: 'Logout', onclick: logout })}
      `;
      return template;

}
export default Feed;
import Input from '../components/input.js';
import Button from '../components/button.js'



function logWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    window.location.hash = '#postpage'
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
  
}

function logWithFacebook(){
  const provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');
  provider.setCustomParameters({
  'display': 'popup'
});firebase.auth().signInWithPopup(provider)
  .then(function(result) {
  //window
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  
}

function callPage() {
  window.location.hash='#register'
}

function Home() {
  const template = `
    <h1>Home Page</h1>

    ${Button({id:'GOOGLE', title:'GOOGLE', onClick: logWithGoogle})}
    ${Button({id:'FACE', title:'FACEBOOK', onClick: logWithFacebook})}
    ${Button({id:'CREATE', title:'REGISTRE-SE', onClick: callPage })}
     `;
     

  return template;
}




export default Home ;

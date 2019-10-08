
function loginSocial (){
  event.preventDefault();
    // var config = {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
    //   var token = result.credential.accessToken;
    //   var user = result.user;
    // }).catch(function(error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   var email = error.email;
    //   var credential = error.credential;
    });
  }

function Login() {
  const template = `













  ${Button(
    { id: 'google', title: 'Google', class: 'btn-google', onClick: loginSocial },
  )}
  `;
  return template;
}

export default Login;

function loginFacebook() {

  const provider = new firebase.auth.FacebookAuthProvider();
  //provider.addScope('user_email');
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {    
    //let token = result.credential.accessToken;    
    //let user = result.user;    
    window.location = '#home.js'
          
  }).catch(function(error) {
    alert('Falha na autenticação!')
    window.location = '#login.js';
         
  });
  
};

export default loginFacebook;
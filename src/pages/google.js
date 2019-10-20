function loginGoogle() {

  let provider = new firebase.auth.GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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


export default loginGoogle;

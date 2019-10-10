firebase.auth().signOut().then(function() {
  alert ('Sign-out successful.')
}).catch(function(error) {
  // An error happened.
});

  window.location.href = '#singOut';
export default SignOut;
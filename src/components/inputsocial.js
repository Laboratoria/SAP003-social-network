function Inputsocial(props) {
  const template = `
    <button id='${props.id}' class='${props.class}' onclick="inputsocial.handleClick(event)">Entrar com o ${props.title}</button>  
  `;
  return template;
};

window.inputsocial = {
  handleClick: (event) => {
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
  },
};

export default Inputsocial;
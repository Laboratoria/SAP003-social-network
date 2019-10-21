import Button from '..//components/button.js';
import Logo from '../components/logo.js';

function signOut() {  
  firebase.auth().signOut()
  .then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
}


function user() {

  
  
 /*  console.log(firebase.auth().currentUser.uid);
  const teste = db.collection('users').get().then({
    
  }) */
  console.log('oi');

}


function profile() {
  const template = `
    <header class= "header-home">
    ${Logo({ class: "logonav" })}         
    </header>   
    <nav></nav>
    <br>
    <a href= "#home.js" class= "button-home"><i class="fas fa-home"></i></a>
    <h1 class="id-user">Perfil de ${firebase.auth().currentUser.displayName}</h1>
    ${Button({ class: "button-out", onClick: signOut, title:'<i class="fas fa-sign-out-alt"></i>' })}
    <div class= "post-area">
      <img class="img-user" src="./img/profile_girl.png"/>     
    </div>
    <br>
    ${Button({ class: "primary-button", onClick: user, title:'teste' })}        
    <ul class="feed">    
    </ul>   
  `;


  return template;
}

export default profile;
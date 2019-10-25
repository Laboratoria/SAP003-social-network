import Button from '..//components/button.js';
import Logo from '../components/logo.js';

function signOut() {  
  firebase.auth().signOut()
  .then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
}


function profile() {

  window.app.filterPost();


  const template = `
    <header class= "header-home">
    ${Logo({ class: "logonav" })}         
    </header>
    <nav>
      <ul>
        <li> 
          <a href="#home.js" class ="button-home">
            <i class="fas fa-home"></i> 
          </a>
        </li>
        <li>${Button({ class: "button-out", onClick: signOut, title:'Log Out <i class="fas fa-sign-out-alt"></i>' })}</li>
      </ul>
    </nav>
    <br>
    <div class= "post-area">
      <img class="img-user" src="./img/profile_girl.png"/>     
      <br>     
      <h1>Nome:${firebase.auth().currentUser.displayName}</h1>
      <h2>E-mail: </h2>
      </div>
    <br>    
    <ul class="feed">    
    </ul>   
  `;


  return template;
}

export default profile;
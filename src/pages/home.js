import Button from '..//components/button.js';
import savePost from '..//pages/post.js';
import Logo from '../components/logo.js';



function signOut() {  
  firebase.auth().signOut()
  .then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
}

function home() {
  window.app.loadPost();  
  const template = `
    <header class= "header-home">
     ${Logo({ class: "logonav" })}         
    </header>
    <p>Perfil de ${firebase.auth().currentUser.displayName} </p>
    <nav>
      <ul class="navigation" role="navigation">
      <li> 
        <a href="#home.js" class ="button-home">  
        <i class="fas fa-home"></i>
        </a>
      </li>
      <li>Sair ${Button({ class: "button-out", onClick: signOut, title:'<i class="fas fa-sign-out-alt"></i>' })}</li>
      </ul>
    </nav>  
    <br>
    <main class ="post-area">     
      <a href ='#profile.js'><img class="img-user" src="./img/profile_girl.png"/></a>
      <textarea name="post" class="post" placeholder="O que você quer trocar?"></textarea>
      ${Button({ class: "button-send", onClick: savePost, title:'<i class="fas fa-paper-plane"></i>' })}
    </div>
    <br>    
    <ul class="feed">    
    </ul>
      
  `;    

  return template;
}

export default home;




import Button from '..//components/button.js';
import savePost from '..//pages/post.js';
import Logo from '../components/logo.js';

function signOut() {  
  firebase.auth().signOut()
  .then(function () {
    window.location = '#login.js';
    
  }).catch(function (error) {
    
  });
};

function home() {
  window.app.loadPost();  
  const template = `
    <header class= "header-home">
     ${Logo({ class: "logonav" })}         
    </header>
    <nav>
      <ul>
        <li><h1 class="id-user">Olá, ${firebase.auth().currentUser.displayName}</h1></li>
        <li>${Button({ class: "button-out", onClick: signOut, title:'Log Out <i class="fas fa-sign-out-alt"></i>' })}</li>
      </ul> 
    </nav>  
    <br>
    <main class ="post-area">     
      <a href ='#profile.js'><img class="img-user" src="./img/profile_girl.png"/></a>
      <textarea name="post" class="post" placeholder="O que você quer trocar?"></textarea>
      <div class="label"><fieldset class="radio">
        <input type="radio" name="privacy" class="privacy" checked>        
        <label for="public"class="public"></label>           
        <input type="radio" name="privacy" class="privacy">
        <label for="privacy" class="private"></label>    
      </fieldset>
      ${Button({ class: "button-send", onClick: savePost, title:'<i class="fas fa-paper-plane"></i>' })}
      <br>
      <br> </div>
    </main>
    <br>    
    <ul class="feed">    
    </ul>      
  `;    

  return template;
}

export default home;




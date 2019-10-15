import Button from '../components/button.js';
import Input from '../components/input.js';


function timeline(){
    const template = `
    <form id="postForm">
    ${Input({placeholder:'Digite sua mensagem', type: 'textarea', class:'post', id:'textPost'})}
    ${Button({type:'submit', title: 'postar'})}<br>
    ${Button({id:'button', title:'Logout', class:'buttonlogout', onClick:'Logout'})}
    </form>
    <div></div>
    `
      return template;
  }

  export default timeline;

function logout(){
  let singout = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signOut(provider).then(function(result) {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    window.location.hash='#home'
  });
  }

  document.getElementById("postForm").addEventListener("submit",function(event){
    event.preventDefault();
    const text = document.getElementById("textPost").value;
    const post = {
      text: text,
      user_id: "",
      likes: 0,
      comments: 

    }
  })

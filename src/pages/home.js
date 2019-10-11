import Button from "../components/button.js";
import Input from "../components/input.js";

const login = (id, event) => {
	event.preventDefault();

	const email = document.getElementById('email-login').value;

	const password = document.getElementById('pass-login').value;

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
	});
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	window.location.hash = 'mural';
  } else {
    // No user is signed in.
  }
});

export function Home() {
	const template = `
	<container class="home">
	 <img src = images/Witchy-logo.png class="logo"/>
	 <section class="login">
	  <h1 class="homepage-title">Share your spells...</h1>
	  <form class="login-form">
	   ${Input({ id:'email-login', placeholder:'Login', type:'email'})}
	   ${Input({ id:'pass-login', placeholder:'Senha', type:'password'})}
	   ${Button({ id:'login', title: 'Login', onclick: login})}
	  </form>
	  ${Button({ id:'sign', title: 'Sign Up', type:'submit', onclick: signUp})}
	 </section>
	</container>`;


	window.location.hash = "home";

	return template;
}

const signUp = (id) => {
	window.location.hash = id;
}

export default Home;
import Button from '../components/button.js';
import Input from '../components/input.js';

const login = () => {
	const email = document.getElementById('email-login').value;
	const password = document.getElementById('pass-login').value;
	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(function(error) {
  		const errorMessage = error.message;
  		document.querySelector('.error-message').innerHTML = 'Senha ou Email incorretos';
			document.getElementById('email-login').addEventListener('click', deleteErrorMessage = () => {
					document.querySelector('.error-message').innerHTML = '';
			})
		})
}

const loginGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(function(result) {
  	const user = result.user;
  	firebase.firestore().collection('users').add(user);
}).catch(function(error) {
  	const errorMessage = error.message;
  	alert(errorMessage);
	});
}

function Home() {
	window.location.hash = '';
	const template = `
	<container class='home'>
	 <img src = images/Witchy-logo.png class='logo'/>
	 <section class='login'>
	  <h1 class='homepage-title'>Compartilhe seus feitiços...</h1>
	  <form class='login-form'>
	   ${Input ({ id:'email-login', placeholder:'E-mail', type:'email'})}
	   ${Input({ id:'pass-login', placeholder:'Senha', type:'password'})} <br>
	   <p class='error-message'></p>
	   ${Button({ class:'btn-login', id:'login', title: 'Entrar', onclick: login})} <br>
	  </form>
	  <div class='buttons'>
	   ${Button({ class:'btn-google' , id:'google-login', title: '<img src="https://img.icons8.com/ios-glyphs/18/000000/google-logo.png" class="google-logo"> ENTRAR COM GOOGLE', type:'submit', onclick: loginGoogle})} <br>
	   ${Button({ class:'btn-sign-up', id:'sign', title: 'Ainda não é membro? Cadastre-se', type:'submit', onclick: signUp})} 
	  </div>
	 </section>
	</container>`;
	return template;
}

const signUp = (id) => {
	window.location.hash = id;
}

export default Home;
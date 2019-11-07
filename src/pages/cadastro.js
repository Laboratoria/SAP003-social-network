 
import Button from "../components/button.js";
import Input from "../components/input.js";
import Post from '../components/post.js';

const register = (event) => {
	event.preventDefault();
	const email = document.querySelector('#mail').value;
	const password = document.querySelector('#pass').value;
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  const errorMessage = error.message;
  alert(errorMessage);
	})
	const name = document.querySelector('#name').value;	
	const born = document.querySelector('#born').value;
	const user = {
		name: name,
		email: email,
		born: born,
	}
	firebase.firestore().collection('users').add(user);
}

const RegisterPage = () => {
	const template = `
	<main class="register">
	 <img src = images/Witchy-logo.png class="cad-logo"/>
	 <h1 class="register-title">Cadastre-se</h1>
	 <form class="register-form">
		${Input({ id:'name', class:"name-register",  placeholder:"Nome", type:"text"})}
		${Input({ id:'born', class:'born-register', type:'date'})}
		${Input({ id:'mail', class:"mail-register", placeholder:"Email", type:"email"})}
		${Input({ id:'pass', class:"pass-register", placeholder:"Senha", type:"password"})}
		${Button({ class:'btn btn-send-sign-up', id:"cad", title: "Cadastrar", type:"submit", value:"submit", onclick: register})}
	 </form>
		${Button({ class:'btn-go-home', id:"go-home", type:"button", title:"Voltar para Login", onclick: goHome})}
	</main>`;
	return template;
}

const goHome = () => {
	window.location.hash = 'home';
}

export default RegisterPage;
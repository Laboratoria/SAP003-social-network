import Button from "../components/button.js";
import Input from "../components/input.js";

const cadastrar = (id, event) => {

	event.preventDefault();

	const email = document.getElementById('mail').value;

	const password = document.getElementById('pass').value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
	})

	const name = document.getElementById('name').value;


//ESTOU AQUI
	const user = {
		name: name,
		email: email
		// bio:
		// nascimento:
	}

	firebase.firestore().collection('users').add(user);
}

export const Cadastro = () => {
	const template = `
	<h1>Cadastre-se</h1>
	<form>
		${Input({ id:"name",  placeholder:"Nome", type:"text"})}
		${Input({ id:"mail", placeholder:"Email", type:"email"})}
		${Input({ id:"pass", placeholder:"Senha", type:"password"})}
		${Button({ class:'btn btn-send-sign-up', id:"cad", title: "Cadastrar", type:"submit", value:"submit", onclick: cadastrar})}</form>
		${Button({ class:'btn-go-home', id:"go-home", type:"button", title:"Back Home", onclick: goHome})}`;

	return template;
}

const goHome = () => {
	window.location.hash = 'home';
}


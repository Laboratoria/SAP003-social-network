import Button from "../components/button.js";
import Cad from "../components/cad-button.js";

const cadastrar = (id, event) => {
	event.preventDefault();
	const email = document.getElementById('mail').value;
	const password = document.getElementById('pass').value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
	})
}

export const Cadastro = () => {
	const template = `
	<h1>Cadastre-se</h1>
	<form>
		${Cad({ id:"name",  placeholder:"Nome", type:"text"})}
		${Cad({ id:"mail", placeholder:"Email", type:"email"})}
		${Cad({ id:"pass", placeholder:"Senha", type:"password"})}
		${Button({ id:"cad", title: "Cadastrar", type:"submit", value:"submit", onclick: cadastrar})}</form>`;

	return template;
}



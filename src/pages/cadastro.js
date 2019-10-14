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
}

export const Cadastro = () => {
	const template = `
	<main class="cadastro">
	<h1 class="titulo">Cadastre-se</h1>
	<form class="tela">
		${Input({ id:"name",  placeholder:"Nome", type:"text"})}
		${Input({ id:"mail", placeholder:"Email", type:"email"})}
		${Input({ id:"pass", placeholder:"Senha", type:"password"})}
		${Button({ class:'btn btn-send-sign-up', id:"cad", title: "Cadastrar", type:"submit", value:"submit", onclick: cadastrar})}</form></main>`;

	return template;
}




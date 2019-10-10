import {Home} from "../pages/home.js";
import {Cadastro} from "../pages/cadastro.js";
import {PaginaInicial} from "../pages/paginainicial.js"

function init() {
  document.querySelector("main").innerHTML = Home();
}

const cad = () => {
  document.querySelector("main").innerHTML = Cadastro();
}

const pagInicial = () => {
	document.querySelector("main").innerHTML = PaginaInicial();
}


const hash = () => {
	if (location.hash === "#login") {
		return pagInicial();
	} else if (location.hash === "#sign") {
		return cad();
	}
}
//mudança de hash #

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);




let authEmailPassButton = document.getElementById("authEmailPassButton");
let createUserButton = document.getElementById("createUserButton");
 
let authGoogleButton = document.getElementById("authGoogleButton");
let authFacebookButton = document.getElementById("authFacebookButton");

let logOutButton = document.getElementById("logOutButton");

//Inputs
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

//Displays 
let displayName = document.getElementById("displayName");

createUserButton.addEventListener("click", function(){
	firebase
		.auth().createUserWithEmailAndPassword(emailInput.Value, passwordInput.value)
		.then(function() {
			alert("Bem vindo" + emailInput.value)
		})
		.catch(function (error) {
			console.error(error.code);
			console.error(error.message);
			alert("Falha ao cadastrar, verifique o erro no console.")
		})
})

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	} else {
	  // No user is signed in.
	}
  });
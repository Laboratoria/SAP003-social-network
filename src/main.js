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

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);
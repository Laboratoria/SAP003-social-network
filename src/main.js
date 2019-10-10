import {Home} from "../pages/home.js";
import {Cadastro} from "../pages/cadastro.js";
import {PaginaInicial} from "../pages/paginainicial.js"
import {Mural} from "../pages/mural.js"

function init() {
  document.querySelector("main").innerHTML = Home();
}

const cad = () => {
  document.querySelector("main").innerHTML = Cadastro();
}

const mural = () => {
	document.querySelector("main").innerHTML = Mural();
}

const hash = () => {
	if (location.hash === "#sign") {
		return cad();
	} else if (location.hash === "#mural") {
		return mural();
	} else if (location.hash === "#home") {
		return init();
	}
}

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);
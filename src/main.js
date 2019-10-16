import {Home} from "../pages/home.js";
import {Cadastro} from "../pages/cadastro.js";
import {PaginaInicial} from "../pages/paginainicial.js"
import {Mural} from "../pages/mural.js"
import {EditarPerfil} from "../pages/editarperfil.js"

function init() {
  document.querySelector("main").innerHTML = Home();
}

const cad = () => {
  document.querySelector("main").innerHTML = Cadastro();
}

const mural = () => {

	const user = firebase.auth().currentUser;

	const allPosts = firebase.firestore().collection('posts');

	allPosts.get().then(snap => {
		let postsLayout = '';
		snap.forEach(post => {

			if (post.data().userID === user.uid) {
				postsLayout += `
				<li class='timeline-item' id='${post.data().userID}'>
					<p>${post.data().text}</p>
					<p>${post.data().name}</p>
				</li>`;
			}			
		})
		document.querySelector("main").innerHTML = Mural({postsLayout: postsLayout});
	})
}

const editarPerfil = () => {
	document.querySelector("main").innerHTML = EditarPerfil();
}

const hash = () => {
	if (location.hash === "#sign") {
		return cad();
	} else if (location.hash === "#mural") {
		return mural();
	} else if (location.hash === "#home") {
		return init();
	} else if (location.hash === "#editar") {
		return editarPerfil();
	}
}
//mudança de hash #

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);



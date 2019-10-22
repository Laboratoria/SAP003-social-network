import { Home } from "../pages/home.js";
import { Cadastro } from "../pages/cadastro.js";
import { PaginaInicial } from "../pages/paginainicial.js"
import { Mural } from "../pages/mural.js"
import { EditarPerfil } from "../pages/editarperfil.js"
import Button from '../components/button.js';
import Post from '../components/post.js';
import Input from '../components/input.js';

function init() {
	document.querySelector("main").innerHTML = Home();
}

const cad = () => {
	document.querySelector("main").innerHTML = Cadastro();
}

const mural = () => {
	const user = firebase.auth().currentUser;

	const allPosts = firebase.firestore().collection('posts');

	//não usar o if para posts públicos
	allPosts.orderBy('date', 'desc').get().then(snap => {
		let postsLayout = '';

		snap.forEach(post => {
			if (post.data().userID === user.uid) {
				postsLayout += `
				<li class='timeline-item' data-id='${post.data().userID}' post-id='${post.id}'>
					<p>${post.data().text}</p>
					<p>${post.data().date}</p>
					<p>${post.data().name}</p>
					${Button({ id: post.id, title:'deletar',onclick: deletar})}
					${Button({ id: post.id, title:'editar', onclick: editar})}
					${Button({ class: 'btn-likes', id: post.id, title: 'like', onclick: like })}
					<p id='${post.id}'>${post.data().likes}</p>
					${Post({id: post.id, placeholder: 'Comentários', rows: '5', cols: '50'  })}
					${Button({id: post.id, title: 'comentar', onclick: comment})}
				</li>
				`;
			}
		})
		document.querySelector("main").innerHTML = Mural({ postsLayout });
	})
}

const comment = (id, event) => {
	const text = document.querySelector(`.txt-area[post-id='${post.id}']`).value;
	firebase.firestore().collection(`posts/${id}/comments`).add({text, user: id})
	console.log(text);
}


const editar = (id, event) => {
	const postEdit = firebase.firestore().collection('posts').doc(id);	

	postEdit.get().then(post => {
		document.querySelector(`[post-id=${post.id}]`).innerHTML = `
		<input placeholder='${post.data().text}'></input>
		`;
	})
}

const like = (id, event) => {
	firebase.firestore().collection('posts').doc(id).get().then((doc) => {
		let like = (doc.data().likes) +1 ;
		firebase.firestore().collection('posts').doc(id).update({likes: like});
   })
//.then(() => {
//     app.loadPosts();
//   });
}
	// const likes = document.getElementById(post.id);
	// const likesbutton = document.querySelector(`${post.data().likes}`);
	// likesbutton.innerHTML++;
	//firebase.firestore().collection('posts').doc(id).update({ likes });


const deletar = (id, event) => {
	firebase.firestore().collection('posts').doc(id).delete();
	document.getElementById(id).parentElement.remove();
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
window.mural = mural;

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);

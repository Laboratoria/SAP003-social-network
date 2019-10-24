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

	allPosts.orderBy('date', 'desc').get().then(snap => {
		let postsLayout = '';
//usuario logado
		snap.forEach(post => {
			if (post.data().userID === user.uid) {
				postsLayout += `
				<li class='timeline-item' data-id='${post.data().userID}'>
					<p post-id='${post.id}' contenteditable="true">${post.data().text}</p>
					<p>${post.data().date}</p>
					<p>${post.data().name}</p>
					${Button({id:post.id, title:'deletar',onclick:deletar})}
					${Button({id:post.id, title:'editar', onclick: editar})}
					${Button({ class: 'btn-likes', id: post.id, title: 'like', onclick: like })}
					<p id="${post.id}">${post.data().likes}</p>
					<ul>
						<li>
							${Input({dataId: post.id, placeholder: 'Comente aqui', type: 'text'})}
							${Button({id:post.id, title:'Commentar',onclick:commentarPost})}
						</li>
					</ul>
				</li>
				`;
				//usuario não logado
			} else {
				postsLayout += `
				<li class='timeline-item' data-id='${post.data().userID}'>
					<p post-id='${post.id}' contenteditable="true">${post.data().text}</p>
					<p>${post.data().date}</p>
					<p>${post.data().name}</p>
					${Button({ class: 'btn-likes', id: post.id, title: 'like', onclick: like })}
					<p id="${post.id}">${post.data().likes}</p>
					<ul>
						<li>
							${Input({dataId: post.id, placeholder: 'Comente aqui', type: 'text'})}
							${Button({id:post.id, title:'Commentar',onclick:commentarPost})}
						</li>
					</ul>
				</li>
				`;
			}
		})
		document.querySelector("main").innerHTML = Mural({ postsLayout });
	})
}


const editar = (id, event) => {

	const user = firebase.auth().currentUser;

	const postEdit = document.querySelector(`[post-id='${id}']`).innerText;

	const post = firebase.firestore()
.collection('posts').doc(id)

	post.update({
		text: postEdit
	})
}

const like = (id, event) => {
	const amei = post.data.likes;
	amei.innerHTML++;
	likes = document.getElementById(post.id);
	firebase.firestore().collection('posts').doc(id).update({ likes });
}

const deletar = (id, event) => {
	firebase.firestore().collection('posts').doc(id).delete();
	document.getElementById(id).parentElement.remove();
}

const commentarPost = (id, event) => {
	const input = document.querySelector(`input[data-id='${id}']`);
	firebase.firestore().collection(`posts/${id}/comments`).add({text: input.value});
	event.target.parentElement.innerHTML += `<li>${input.value}</li>`	
}

const editarPerfil = () => {
	
	const user = firebase.auth().currentUser;
	var name, email, phoneNumber, photoUrl, uid, emailVerified;

	if (user != null) {
  	name = user.displayName;
  	email = user.email;
  	phoneNumber = user.phoneNumber;
  	photoUrl = user.photoURL;
  	emailVerified = user.emailVerified;
  	uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
	}	

	console.log(user)

	const template = `
		<p>${name}</p>
		<p>${email}</p>
		<p>${phoneNumber}</p>
		<p></p>
	`;

	document.querySelector("main").innerHTML = EditarPerfil({ template });
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


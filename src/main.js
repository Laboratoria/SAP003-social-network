import Home from '../pages/home.js';
import { RegisterPage } from '../pages/cadastro.js';
import { PaginaInicial } from '../pages/paginainicial.js'
import FeedPage from '../pages/mural.js'
import About from '../pages/editarperfil.js'
import Button from '../components/button.js';
import Post from '../components/post.js';
import Input from '../components/input.js';

function homeMain() {
	document.querySelector('main').innerHTML = Home();
}

const registerMain = () => {
	document.querySelector('main').innerHTML = RegisterPage();
}	

const feedMain = () => {
	const user = firebase.auth().currentUser;
	const allPosts = firebase.firestore().collection('posts');
	allPosts.orderBy('date', 'desc').get().then(snap => {
		let postsLayout = '';
		snap.forEach(post => {
			post.ref.collection('comments').get()
				.then(commentSnap => {
					const comments = [];
					commentSnap.forEach( comment => {
						comments.push(comment.data());
					});
			if (post.data().userID === user.uid) {
				postsLayout += `
				<li class='timeline-item' data-id='${post.data().userID}'>
					<p post-id='${post.id}' contenteditable='true' class='post'>${post.data().text}</p>
					<p class='date'>${post.data().date}</p>
					<p class='user'>${post.data().name}</p>
					${Button({ class: 'btn-delete', id: post.id, title: '<img src="images/botaodeletee.png" class="icon-delete" />', onclick: deletar })}
					${Button({ class: 'btn-edit', id: post.id, title: '<img src="images/botaoeditar.png" class="icon-edit" />', onclick: editar })}
					${Button({ class: 'btn-likes', id: post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like })}
					<p like-id='${post.id}' class="like">${post.data().likes}</p>
						${Input({ class: 'input-comment', dataId: post.id, placeholder: 'Comentários', type: 'text' })}
						${Button({ class: 'btn-comment', id: post.id, title:'Comentar', onclick: commentarPost })}
					<ul class='comments'>
						${comments.map(comment => `<li class='comment'>${comment.text}</li>`).join("")}
					</ul>
				</li>
				`;
			} else {
				postsLayout += `
				<li class='timeline-item' data-id='${post.data().userID}'>
					<p post-id='${post.id}' class='post'>${post.data().text}</p>
					<p class='date'>${post.data().date}</p>
					<p class='user'>${post.data().name}</p>
					${Button({ class: 'btn-likes', id: post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like })}
					<p like-id='${post.id}' class='like'>${post.data().likes}</p>
					${Input({ class: 'input-comment', dataId: post.id, placeholder: 'Comentários', type: 'text' })}
					${Button({ class: 'btn-comment', id: post.id, title: 'Comentar', onclick: commentarPost })}
					
					<ul class='comments'>
						${comments.map(comment => `<li class='comment'>${comment.text}</li>`).join('')}
					</ul>
				</li>
				`;
			}
				document.querySelector('main').innerHTML = FeedPage({ postsLayout });
		
			})	
		})
	})
}

const editar = (id, event) => {
	const user = firebase.auth().currentUser;
	const postEdit = document.querySelector(`[post-id='${id}']`).innerText;
	const post = firebase.firestore().collection('posts').doc(id);
	post.update({
		text: postEdit
	})
}

const like = (id, event) => {
	firebase.firestore().collection('posts').doc(id).get().then((post) => {
		let like = (post.data().likes) + 1;
		let likes = document.querySelector(`[like-id='${id}']`)
		firebase.firestore().collection('posts').doc(id).update({ likes: like });
		likes.innerHTML = like;
	})
}


const deletar = (id, event) => {
	firebase.firestore().collection('posts').doc(id).delete();
	document.getElementById(id).parentElement.remove();
}

const commentarPost = (id, event) => {
	const input = document.querySelector(`input[data-id='${id}']`);
	firebase.firestore().collection(`posts/${id}/comments`).add({ text: input.value });
	event.target.parentElement.innerHTML += `<p class='ja'>${input.value}</p>`
}

const about = () => {
	const template = `
		<section class='texto'>
			<h1 class='sobre-titulo'>Sobre</h1>
			<p class='sobre-texto'>Nesta aplicação web o usuário poderá interagir de forma criativa no clima de bruxaria. O projeto tem como objetivo integrar pessoas que compartilham da mesma ideia ou que estajam disponíveis a aprender novos feitiços ou curiosidades.</p>
		</section>
		<section class='imagens-das-desenvolvedoras'>
			<div class='dev'>
				<img class='imagem' src='../images/evora.png'>
				<p class='nome'><a href='https://github.com/e-v-s' target='_blank'>Évora</a></p>
			</div>
			<div class='dev'>
				<img class='imagem' src='../images/jessica.png'>
				<p class='nome'><a href='https://github.com/jpbnascimento' target='_blank'>Jéssica</a></p>
			</div>
			<div class='dev'>
				<img class='imagem' src='../images/maria.png'>
				<p class='nome'><a href='https://github.com/jpbnascimento/' target='_blank'>Maria Carolina</a></p>
			</div>
		</section>
	`;

	document.querySelector('main').innerHTML = About({ template });
}


const hash = () => {
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
  		if (location.hash === '#feed') {	
  			return feedMain();
  		} else if (location.hash === '#edit') {
  			return about();
  		} 
  	} else {
  		if (location.hash === '#sign') {
  			return registerMain();
  		} else if (location.hash === '#home') {
  			return homeMain();
  		}
  	}
	})
}

window.feedMain = feedMain;

window.addEventListener('load', hash);
window.addEventListener('hashchange', hash, false);
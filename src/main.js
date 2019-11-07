import Home from '../pages/home.js';
import RegisterPage from '../pages/cadastro.js';
import FeedPage from '../pages/mural.js';
import About from '../pages/editarperfil.js';
//import Timeline from '../components/timelinepost.js';

const selectorMain = document.querySelector('main');

function homeMain() {
	selectorMain.innerHTML = Home();
}

const registerMain = () => {
	selectorMain.innerHTML = RegisterPage();
}

const feedMain = () => {
	const user = firebase.auth().currentUser;
	const allPosts = firebase.firestore().collection('posts');
	allPosts.orderBy('date', 'desc').get().then(snap => {
		snap.forEach(post => {
			// post.ref.collection('comments').get()
			// 	.then(commentSnap => {
			// 		const comments = [];
			// 		commentSnap.forEach( comment => {
			// 			comments.push(comment.data());
			// 		});
			// if (post.data().userID === user.uid) {
			// 	postsLayout += `
			// 	<li class='timeline-item' data-id='${post.data().userID}'>
			// 		<p post-id='${post.id}' contenteditable='true' class='post'>${post.data().text}</p>
			// 		<p class='date'>${post.data().date}</p>
			// 		<p class='user'>${post.data().name}</p>
			// 		${Button({ class: 'btn-delete', id: post.id, title: '<img src="images/botaodeletee.png" class="icon-delete" />', onclick: deletar })}
			// 		${Button({ class: 'btn-edit', id: post.id, title: '<img src="images/botaoeditar.png" class="icon-edit" />', onclick: editar })}
			// 		${Button({ class: 'btn-likes', id: post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like })}
			// 		<p like-id='${post.id}' class="like">${post.data().likes}</p>
			// 			${Input({ class: 'input-comment', dataId: post.id, placeholder: 'Comentários', type: 'text' })}
			// 			${Button({ class: 'btn-comment', id: post.id, title:'Comentar', onclick: commentarPost })}
			// 		<ul class='comments'>
			// 			${comments.map(comment => `<li class='comment'>${comment.text}</li>`).join("")}
			// 		</ul>
			// 	</li>`;
			// } else {
			// 	postsLayout += `
			// 	<li class='timeline-item' data-id='${post.data().userID}'>
			// 		<p post-id='${post.id}' class='post'>${post.data().text}</p>
			// 		<p class='date'>${post.data().date}</p>
			// 		<p class='user'>${post.data().name}</p>
			// 		${Button({ class: 'btn-likes', id: post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like })}
			// 		<p like-id='${post.id}' class='like'>${post.data().likes}</p>
			// 		${Input({ class: 'input-comment', dataId: post.id, placeholder: 'Comentários', type: 'text' })}
			// 		${Button({ class: 'btn-comment', id: post.id, title: 'Comentar', onclick: commentarPost })}
			// 		<ul class='comments'>
			// 			${comments.map(comment => `<li class='comment'>${comment.text}</li>`).join('')}
			// 		</ul>
			// 	</li>
			// 	`;
			// 	}	
			// document.querySelector('main').innerHTML += FeedPage({ post, user });	
				FeedPage({post, user});
			})	
		})		
	// })
}

const aboutMain = () => {
	selectorMain.innerHTML = About();
}

const hash = () => {
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
  		window.location.hash = '#feed'; 	
  			return feedMain();
  		if (location.hash === '#edit') {
  			return aboutMain();
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
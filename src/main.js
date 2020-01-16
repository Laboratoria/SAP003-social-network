import Home from '../pages/home.js';
import RegisterPage from '../pages/cadastro.js';
import FeedPage from '../pages/mural.js';
import About from '../pages/editarperfil.js';

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
			post.ref.collection('comments').get()
				.then(commentSnap => {
					const comments = [];
					commentSnap.forEach( comment => {
						comments.push(comment.data());
					})
				document.querySelector('main').innerHTML = FeedPage({ post, user, comments });
			})	
		})		
	})
}

const aboutMain = () => {
	selectorMain.innerHTML = About();
}

const hash = () => {
	firebase.auth().onAuthStateChanged(function(user) {
  	if (user) {
			return feedMain();
  		if (location.hash === '#edit') {
  			return aboutMain();
  		} 
  	} else {
  		if (location.hash === '#sign') {
  			return registerMain();
  		} else if (location.hash === '') {
  			return homeMain();
  		}
  	}
	})
}

window.feedMain = feedMain;

window.addEventListener('load', hash);
window.addEventListener('hashchange', hash, false);
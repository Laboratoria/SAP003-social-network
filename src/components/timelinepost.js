// import Button from '../components/button.js';
// import Post from '../components/post.js';
// import Select from '../components/select.js';
// import FeedPage from '../pages/mural.js';

// const changeSelect = () => {
// 	if (document.getElementById('select').value === 'feed') {
// 		window.location.hash = 'feed';
// 	} else if (document.getElementById('select').value === 'edit') {
// 		window.location.hash = 'edit';
// 	}
// }

// const sendAndRetrievePost = () => {
// 	const user = firebase.auth().currentUser;
// 	const text = document.getElementById('post').value;
// 	const post = {
// 		name: user.email,
// 		text,
// 		userID: user.uid,
// 		date: new Date().toLocaleString('pt-BR'),
// 		likes: 0
// 	}
// 	firebase.firestore().collection('posts').add(post);
// 	window.feedMain();
// 	document.getElementById('post-form').reset();
// }

// const logout = () => {
// 	firebase.auth().signOut().then(function () {
// 		window.location.hash = 'home';
// 	}).catch(function (error) {
// 	});
// }

// const Timeline = (props) => {
// 	const template = `
// 			<header class='navbar'>
// 			<nav class='banner'>
// 				<ul class='nav-links'>
// 					<li class='dropdown-menu'>
// 						<select class='menu-dropdown' id='select' onchange='changeSelect()'>
// 							${Select({ name: 'Feed', id: 'feed', class: 'class-feed', value: 'feed', selected: 'selected' })}
// 							${Select({ name: 'Sobre', id: 'edit-profile', class: 'class-edit-profile', value: 'edit' })}
// 						</select>
// 					</li>
// 					<li><img class='nav-logo' src='images/witchy-navbar.png' alt='navlogo'></li>
// 					<li>${Button({ class: 'btn-logout', id: 'btn-logout', type: 'submit', title: 'Sair', onclick: logout })}</li>
// 				</ul>	
// 			</nav>
// 		</header>
// 		<section class='user-profile'></section>
// 		<section class='post-section'>
// 			<form id='post-form'>
// 				${Post({ id: 'post', placeholder: 'Qual a  bruxaria de hoje?', rows: '5', cols: '50' })}
// 				${Button({ class: 'btn-post', id: 'btn-post-send', type: 'submit', title: '<img src="images/botaopost.png" class="icon-post" />', onclick: sendAndRetrievePost })}
// 			</form>
// 		</section>
// 		<ul id='timeline'>
// 		</ul>
// 		`;
// 	return template;
// }



// export default Timeline;
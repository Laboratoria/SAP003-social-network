import Button from '../components/button.js';
import Select from '../components/select.js';
import Post from '../components/post.js';

export const Mural = (props) => {

	const template = `
	<header class='navbar'>
		<nav class='banner'>
			<ul class='nav-links'>
				<li class='dropdown-menu'>
					<select class='menu-dropdown' id='select' onchange='changeSelect()'>
						${Select({ name: 'Mural', id: 'mural', class: 'class-mural', value: 'mural', selected: 'selected' })}
						${Select({ name: 'Editar Perfil', id: 'editar-perfil', class: 'class-editar-perfil', value: 'editar' })}
					</select>
				</li>
				<li><img class='nav-logo' src='images/witchy-navbar.png' alt='navlogo'> </li>
				<li>${Button({ class: 'btn-logout', id: 'btn-logout', type: 'submit', title: 'Sair', onclick: logout })}</li>
			</ul>	
		</nav>
	</header>
	<section class='user-profile'>
		
	</section>
	<section class='post-section'>
		<form id='post-form'>
			${Post({ id: 'post', placeholder: 'Qual a  bruxaria de hoje?', rows: '5', cols: '50' })}
			${Button({ class: 'btn-post', id: 'btn-post-send', type: 'submit', title: '<img src="images/botaopost.png" class="icon-post" />', onclick: sendAndRetrievePost })}
		</form>
	</section>
	<ul id='timeline'>
	${props.postsLayout}
	`;

	return template;
}

const changeSelect = () => {
	if (document.getElementById('select').value === 'mural') {
		window.location.hash = 'mural';
	} else if (document.getElementById('select').value === 'editar') {
		window.location.hash = 'editar';
	} else {
		logout();
	}
}

const sendAndRetrievePost = () => {

	const user = firebase.auth().currentUser;

	const text = document.getElementById('post').value;

	const post = {
		name: user.email,
		text,
		userID: user.uid,
		date: new Date().toLocaleString('pt-BR'),
		likes: 0
	}

	firebase.firestore().collection('posts').add(post);

	window.mural();

	document.getElementById('post-form').reset();
}

const logout = () => {

	firebase.auth().signOut().then(function () {
		window.location.hash = 'home';
	}).catch(function (error) {
	});
}

window.changeSelect
	= changeSelect;
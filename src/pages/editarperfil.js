import Button from "../components/button.js";
import Select from "../components/select.js";

const logout = () => {
	firebase.auth().signOut().then(function () {
		window.location.hash = 'home';
	})
}

const changeSelect = () => {
	if (document.getElementById('select').value === 'feed') {
		window.location.hash = 'feed';
	} else if (document.getElementById('select').value === 'edit') {
		window.location.hash = 'edit';
	}
}

const About = () => {
	window.location.hash = 'edit';
	const template = `
	<header class='navbar'>
		<nav class='banner'>
			<ul class='nav-links'>
				<li class='dropdown-menu'>
					<select class='menu-dropdown' id="select" onchange="changeSelect()">
					${Select({name:'Feed', id:'feed', class:'class-feed', value:'feed'})}
					${Select({name:'Sobre', id:'edit-profile', class:'class-edit-profile', value:'edit', selected:'selected'})}
					</select>
				</li>
				<li><img class='nav-logo' src='images/witchy-navbar.png' alt='navlogo'></li>
				<li>${Button({ class: 'btn-logout', id: 'btn-logout', type: 'submit', title: 'Sair', onclick: logout })}</li>
			</ul>
		</nav>
	</header>
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
	return template;
}

window.changeSelect
	= changeSelect;

export default About;
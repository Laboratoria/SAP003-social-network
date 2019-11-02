import Button from "../components/button.js";
import Select from "../components/select.js";

const About = (props) => {
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
	${props.template}
	`;
	return template;
}

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

window.changeSelect
	= changeSelect;

export default About;
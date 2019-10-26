import Button from "../components/button.js";
import Select from "../components/select.js";

export const About = (props) => {
	const template = `
	<header class='navbar'>
		<nav class='banner'>
			<ul class='nav-links'>
				<li class='dropdown-menu'>
					<select class='menu-dropdown' id="select" onchange="changeSelect()">
					${Select({name:'Mural', id:'mural', class:'class-mural', value:'mural'})}
					${Select({name:'Sobre', id:'editar-perfil', class:'class-editar-perfil', value:'editar', selected:'selected'})}
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
	}).catch(function (error) {
	});
}


const test = () => {
	if (document.getElementById('select').value === "mural") {
		window.location.hash = "mural";
	} else if (document.getElementById("select").value === "editar") {
		window.location.hash = "editar";
	} else {
		logout();
	}
}

 // Bio será colocada em editar perfil
 // ${Post({ id:'bio', placeholder:'Escreva sobre você', rows:'5', cols:'8'})}
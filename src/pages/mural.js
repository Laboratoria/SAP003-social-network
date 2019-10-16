import Button from "../components/button.js";
import Select from "../components/select.js";
import Post from "../components/post.js"

export const Mural = () => {
	const template = `
	<header class="navbar">
		<nav>
			<ul class="nav-links">
				<li class="dropdown-menu">
					<select id="select" onchange="changeSelect()">
						${Select({name:'Mural', id:'mural', class:'class-mural', value:'mural', selected:"selected"})}
						${Select({name:'Editar Perfil', id:'editar-perfil', class:'class-editar-perfil', value:'editar'})}
						${Select({name:'Logout', id:'logout', class:'class-logout', value:'logout'})}
					</select>
				</li>
				<li><img class="nav-logo" src="images/witchy-navbar.png" alt="navlogo"> </li>
				<li>Logout</li>
			</ul>	
		</nav>
	</header>

	<section class="post-section">
		<form id='post-form'>
			${Post({id:'post', placeholder:"Qual a  bruxaria de hoje?", rows:'5', cols:'50'})}
			${Button({class:'btn-post', id:'btn-post-send', type:'submit', title:'Post', onclick: post})}
		</form>
	</section>`;

	return template;
}

const changeSelect = () => {
	if (document.getElementById('select').value === "mural") {
		window.location.hash = "mural";
	} else if (document.getElementById("select").value === "editar") {
		window.location.hash = "editar";
	} else {
		logout();
	}
}


//PAREI AQUI
const post = () => {
	const userPost = document.getElementById('post').value;

		

		document.getElementById('post-form').reset();
}

const logout = () => {

	firebase.auth().signOut().then(function() {
		window.location.hash = 'home';
	}).catch(function(error) {
	});
}

window.changeSelect
 = changeSelect;

import Button from "../components/button.js";
import Select from "../components/select.js";

export const Mural = () => {
	const template = `
	<header>
		<nav>
			<li>
				<select id="select" onchange="test()">
					${Select({name:'Mural', id:'mural', class:'class-mural', value:'mural', selected:"selected"})}
					${Select({name:'Editar Perfil', id:'editar-perfil', class:'class-editar-perfil', value:'editar'})}
					${Select({name:'Logout', id:'logout', class:'class-logout', value:'logout'})}
				</select>
			</li>
			<li>Logo</li>
			<li>Logout</li>
		</nav>
	</header>
	<section>
		<form>
			<input>textarea</input><button>post</button>
			<button>adicionar fotinha</button>	
	</section>
	${Button({ class:'btn-logout', id:"logout", type:"button", title:"Logout", onclick: logout})}
	`;

	return template;
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

const logout = () => {

	firebase.auth().signOut().then(function() {
		window.location.hash = 'home';
	}).catch(function(error) {
	});
}

window.test = test;

//nav-bar(dropdown com nome da usuária+logo+logout) 

//foto+nome+bio

// input de texto+ 2 botões:
// 1 foto
// 1 enviar

// embaixo mural (twitter)
import Button from "../components/button.js";

export const Mural = () => {
	const template = `
	<header>
		<nav>
			<li>Dropdown</li>
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

const logout = () => {

	firebase.auth().signOut().then(function() {
		window.location.hash = 'home';
	}).catch(function(error) {
	});
}


//nav-bar(dropdown com nome da usuária+logo+logout) 

//foto+nome+bio

// input de texto+ 2 botões:
// 1 foto
// 1 enviar

// embaixo mural (twitter)
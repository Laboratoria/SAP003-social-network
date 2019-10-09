import Button from "../components/button.js";

export function Home() {
	const template = `<h1 class="homepage-title">Livreiras</h1>
	<form class="login-form">
	<input type="text" id="login-input" class="js-login" placeholder="Livreira">
	<input type="password" id="password-input" class="js-senha" placeholder="Senha">
	${Button({ id:"login", title: "Login", onclick: login})}
	</form>
	${Button({ id:"sign", title: "Sign Up", type:"submit", onclick: signUp})}`;

	return template;
}

const login = (id) => {
	window.location.hash = id;
}

const signUp = (id) => {
	window.location.hash = id;
}

export default Home;
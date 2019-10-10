import Button from "../components/button.js";
import Input from "../components/cad-button.js";

export function Home() {
	const template = `<h1 class="homepage-title">Witchy</h1>
	<form class="login-form">
	${Input({ id:"email-login", placeholder:"Login", type:"email"})}
	${Input({ id:"pass-login", placeholder:"Senha", type:"password"})}
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
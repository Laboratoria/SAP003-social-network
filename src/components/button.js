const Button = (props) => {
	const template = `
	<button class="login-btn"
	id="${props.id}" type="${props.type}"
	onclick="button.handleClick(event, id, ${props.onclick})">${props.title}</button>`;

	return template;
}

window.button = {
	handleClick: (event, id, onclick) => {	
		// firebase.auth(email, senha);
		event.preventDefault();

		onclick(id, event);
	}
}

export default Button;


const Button = (props) => {
	const template = `
	<button class="${props.class}"
	id="${props.id}" type="${props.type}"
	likeid="${props.likeid}"
	value="${props.value}"
	name="${props.name}"
	onclick="button.handleClick(event, id, ${props.onclick})">${props.title}</button>`;
	return template;
}

window.button = {
	handleClick: (event, id, onclick) => {	
		event.preventDefault();
		onclick(id, event);
	}
}

export default Button;
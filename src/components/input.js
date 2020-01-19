const Input = (props) => {
	const template = `
	<input 
	data-id=${props.dataId}
	class=${props.class}
	id=${props.id}
	placeholder=${props.placeholder}
	type="${props.type}"
	></input>`;

	return template;
}

export default Input;
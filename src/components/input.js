const Input = (props) => {
	const template = `
	<input 
	data-id=${props.dataId}
	id=${props.id}
	placeholder=${props.placeholder}
	type="${props.type}"
	></input>`;

	return template;
}

export default Input;
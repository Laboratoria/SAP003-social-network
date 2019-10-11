const Select = (props) => {
	const template = `
		<option id="${props.id}" class="${props.class}" value="${props.value}"
			${props.selected}
		>${props.name}</option>
	`;

	return template;
}

export default Select;

const Cad = (props) => {
	const template = `
	<input 
	id=${props.id}
	placeholder=${props.placeholder}
	type="${props.type}"
	></input>`;

	return template;
}

// window.b = {
// 	handleClick: (event, id) => {
// 		event.preventDefault();
// 		const email = document.getElementById('id').value;
// 		console.log(email);
// 	}
// }

export default Cad;
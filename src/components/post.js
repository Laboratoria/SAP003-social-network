const Post = (props) => {
	const template = `
	<textarea id=${props.id} placeholder='${props.placeholder}' rows='${props.rows}' cols='${props.cols}'></textarea>
	`;

	return template;
}

export default Post;
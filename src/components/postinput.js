function PostInput(props) {
  const template = ` 
    <textarea class="${props.class}" id="${props.id}" placeholder="${props.placeholder}" ></textarea>
    `;
  return template;
}

export default PostInput;
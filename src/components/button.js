function Button(props) {
  const template = `
    <button data-id="${props.dataId}" data-id="${props.dataId2}" class="${props.class}" onclick="button.handleClick(event, ${props.onClick})" >${props.title}</button>
  `;

  return template;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
};
 
export default Button;

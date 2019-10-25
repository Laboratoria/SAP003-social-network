const ButtonImage = (props) => {
  const template = `
  <input
    data-id=${props.dataId}
    class="${props.class}"
    type="${props.type}" 
    onclick="image.handleClick(event,${props.onClick})"
    src="${props.src}"/>
  `;

  return template;
};

window.image = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
};

export default ButtonImage;

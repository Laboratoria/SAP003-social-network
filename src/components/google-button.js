const Google = (props) => {
  const template = `
  <input
    class="${props.class}"
    type="${props.type}" 
    onclick="google.handleClick(event,${props.onClick})"
    src="${props.src}"/>
  `;

  return template;
};

window.google = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
};

export default Google;

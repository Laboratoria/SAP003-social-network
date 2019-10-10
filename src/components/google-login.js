const Google = (props) => {
  const template = `
    <input type= ${props.type} class=${props.class} onclick="input.handleClick(event,${props.onClick})" src=${props.src}>
    `;

  return template;
}

window.input = {
  handleClick: (event, callBack) => {
    callBack();

  },
};

export default Google;

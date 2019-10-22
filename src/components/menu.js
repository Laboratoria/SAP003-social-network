function Menu (props) {
    const template = `
    <li><a onclick="button.handleClick(event, ${props.link})">${props.name}</a></li>
    `;
    return template;
}
window.button = {
    handleClick: (event, callback) => {
      event.preventDefault();
      callback(event);
    },
  };
export default Menu;
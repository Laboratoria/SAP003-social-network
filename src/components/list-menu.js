const List = (props) => {
  const template = `
  <li
  class='${props.class}'
  onClick='list.handleClick(event, ${props.onClick})'> ${props.title}</li>
`;
  return template;
};

window.list = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback();
  },
};

export default List;

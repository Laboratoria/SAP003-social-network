import Post from './post.js';

function Button(props) {
  return `<button data-id=${props.dataId} class="${props.class}" onclick="button.handleClick(event, ${props.onClick})"> ${props.title}</button>`;
}

window.button = {
  handleClick: (event, callback) => {
    event.preventDefault();
    callback(event);
  },
  component: Button,
};

export default Button;

function Button(props) {
  const template = `
    <button class="primary-button">${props.title}</button>
  `;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = template;
  wrapper.querySelector('button').addEventListener('click', props.onClick);

  return wrapper.children[0];
}

export default Button;

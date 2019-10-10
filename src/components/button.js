function Button(props) {
  const template = `
    <button class="primary-button" onclick="button.handleClick(event)" >${props.title}</button>
  `;

  return template;
}


window.button = {
  handleClick: (event) => {
    event.preventDefault();
    const emailValue = document.querySelector(".email").value;
    const passwordValue = document.querySelector(".password").value;
    console.log(emailValue, passwordValue);
  }, 
  };


export default Button;


function Button(props) {
  const buttons = `
    <button class="primary-button" onclick="button.handleClick('${props.button}')" ></button>
  `;

  return buttons;
}
//oioio
window.button = {
  handleClick: (button) => {
    console.log(`Esse é o meu botão ${button}`);
    return `Esse é o meu botão ${button}`;
  },
};

export default Button;

// function Button(props) {
//   const template = `
//     <button class="primary-button" onclick="button.handleClick('${props.id}')" >${props.title}</button>
//   `;
//
//   return template;
// }
//
// window.button = {
//   handleClick: (id) => {
//     console.log(`Esse é o meu botão ${id}`);
//     return `Esse é o meu botão ${id}`;
//   },
// };
//
// export default Button;

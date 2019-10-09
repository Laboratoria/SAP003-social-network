function Button(props) {
  const template = `
    <button class="${props.class}" onclick="button.handleClick('${props.id}')" >${props.title}</button>
  `;
  return template;
}

window.button = {
  handleClick: (id) => {
    console.log(`Esse é o meu botão ${id}`);
    return `Esse é o meu botão ${id}`;
  },
};



function Input(props) {
  const template = `
    <input class="${props.class}" placeholder="${props.placeholder}" type="${props.type}"></input>`
  ;
  return template; 
}

window.button = {
  handleClick: (id) => {





export default Button;
// coisas menores (botão input cartão botão de like etc)
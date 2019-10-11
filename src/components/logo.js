const logo = (props) => {
  const template = `
    <img src="${props.img}" class="${props.classImg}">
    <p class="${props.classP}">${props.text}</p>
    `;

  return template;
}

export default logo;
function Card(props) {
  const template = `
        <div class='${props.class}'>
            <p> ${prosp.data().text}; </p>
            <p> ${prosp.data().likes}; </p>
        </div>
      `;

  return template;
}

export default Card;

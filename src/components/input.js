function Input(props) {
    const template = `
    <form>
    <input type=${props.id} name="email"><br>
    `;




    return template;
}

window.input = {
    handleClick: (id) => {
        return `Esse é o meu botão ${id}`;
    },
};

export default Input;
const Input = (props) => {
    const template = `
    <input
    class="${props.class} input"
    placeholder="${props.placeholder}"
    type="${props.type}" />
    `;

    return template;
}

export default Input;
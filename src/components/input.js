function Input(props) {
    const template = `
    <form>
    <input class=${props.class} type=${props.type} placeholder= ${props.placeholder}><br>
    </form> `;
    




    return template;
}


export default Input;
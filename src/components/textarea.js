function Textarea (props) {  
     
    const template = `
    <textarea class="${props.class}" id="${props.id}" placeholder="${props.placeholder}">${props.value}</textarea>
    `;  
    return template;
}  

window.textarea = {
    component: Textarea,
}
    
export default Textarea;
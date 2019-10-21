function Textarea (props) {  
     
    const template = `
    <textarea class="${props.class}" id="${props.id}" placeholder="${props.placeholder}">${props.value}</textarea>
    `;  

    return template;
}  
    
    export default Textarea;
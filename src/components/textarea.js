function textArea(props){
    const textarea = `
    <textarea
    rows = '${props.rows}',
    cols = '${props.cols}',
    wrap = '${props.wrap}',
    class = '${props.class}',
    ></textarea>`;

    return textarea;
}

export default textArea;
const Select = (props) => {
  let template = `<select data-id='${props.dataId}' class='${props.class}'>`;
  const options = props.options || [];

  options.forEach((option) => {
    if (option.value === props.selected) {
      template += `<option selected value='${option.value}'>${option.text}</option>`;
    } else {
      template += `<option value='${option.value}'>${option.text}</option>`;
    }
  });

  template += '</select>';

  return template;
};

export default Select;

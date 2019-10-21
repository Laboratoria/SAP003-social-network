function Date(props) {
  const weekDay = () => {
    let num = props.timestamp.toDate().getDay();
    switch (num) {
      case 0:
        num = 'dom';
        break;
      case 1:
        num = 'seg';
        break;
      case 2:
        num = 'ter';
        break;
      case 3:
        num = 'qua';
        break;
      case 4:
        num = 'qui';
        break;
      case 5:
        num = 'sex';
        break;
      case 6:
        num = 'sab';
        break;
      default:
        num = '';
    }
    return num;
  };

  const month = () => {
    let num = props.timestamp.toDate().getMonth();
    switch (num) {
      case 0:
        num = 'jan';
        break;
      case 1:
        num = 'fev';
        break;
      case 2:
        num = 'mar';
        break;
      case 3:
        num = 'abr';
        break;
      case 4:
        num = 'mai';
        break;
      case 5:
        num = 'jun';
        break;
      case 6:
        num = 'jul';
        break;
      case 7:
        num = 'ago';
        break;
      case 8:
        num = 'set';
        break;
      case 9:
        num = 'out';
        break;
      case 10:
        num = 'nov';
        break;
      case 11:
        num = 'dez';
        break;
      default:
        num = '';
    }
    return num;
  };

  const day = props.timestamp.toDate().getDate();
  const year = props.timestamp.toDate().getFullYear();
  const hour = props.timestamp.toDate().getHours();
  const min = props.timestamp.toDate().getMinutes();

  return `${weekDay()}, ${day} de ${month()} de ${year} às ${hour}:${min}`;
}

export default Date;

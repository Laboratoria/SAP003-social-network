import Button from '../components/button.js';

function Feed() { 

  function changePage () {
    window.location.href = '#login';
  }

  const template = `
      <h1>Olá</h1>
      <p>Esse é o feed 🍌</p>
      ${Button({ class: 'signIn', title: 'Logout', onclick: changePage })}
      `;
      return template;

}
export default Feed;
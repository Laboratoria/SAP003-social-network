import Button from '../components/button.js';

function logOut() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#login';
  }).catch((error) => {
    document.getElementById('error').innerText = `${error.code} ${error.message} - Ocorreu um erro no logout.`;
  });
}

function Home() {
  return `<p class="text">Essa é a home!<p>
  ${Button({
    class: 'primary-button',
    onClick: logOut,
    title: 'Log out',
  })}
  <p id="error"></p>`;
}

export default Home;

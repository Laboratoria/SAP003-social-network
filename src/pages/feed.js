import Button from '../components/button.js';
//import Input from '../components/input.js';

const location = () => {
    location.hash = '';
}

const logout= ()=>{
  firebase.auth().signOut().then(function() {
    location.hash=''
  }).catch(function(error) {
    // An error happened.
  });
}

function Feed() {
    const template = `
    <section class="container">
      <section class="container">
        <p> Aqui vãos os posts </p>
      </section>
      ${Button({ type: 'button', title: 'Logout', class: 'primary-button', onClick: logout })}
    </section>
  `;

    return template;
}

export default Feed;

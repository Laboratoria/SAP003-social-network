import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import PostsContainer from '../components/postsContainer.js';
import Post from '../components/post.js';

function logOut() {
  firebase.auth().signOut().then(() => {
    window.location.href = '#login';
  }).catch((error) => {
    document.getElementById('error').innerText = `${error.code} ${error.message} - Ocorreu um erro no logout.`;
  });
}

// function storePostsLocally() {
//   if (!localStorage.getItem('postsList')) {
//     const postsList = [];
//     localStorage.setItem('postsList', JSON.stringify(postsList));
//   }
//   const postsList = JSON.parse(localStorage.postsList);
//   return postsList;
// }

// function printStoredPosts() {
//   const list = window.home.storePostsLocally();
//   localStorage.setItem('postsList', JSON.stringify(list));
//   return list.map(post => `<li>${post}</li>`);
// }

// function addNewPost() {
//   const list = window.home.storePostsLocally();
//   const element = document.getElementById('feed');
//   const content = document.getElementById('postText');
//   list.push(content);
//   const str = `<li>${content}</li>`;
//   element.prepend(str);
// }

function printPost() {
  const content = document.querySelector('#postText');
  const newPost = window.home.Post({ content: content.value });
  const element = document.querySelector('#feed');
  element.innerHTML += newPost;
}

function Home() {
  return `<p class="text">Essa é a home!<p>
  ${Button({
    class: 'primary-button',
    onClick: window.home.logOut,
    title: 'Log out',
  })}

  <p id="error"></p>
  
  ${Textarea({
    id: 'postText',
    class: 'primary-textarea',
    placeholder: 'O que você está pensando agora?',
  })}
  
  ${Button({
    class: 'primary-button',
    onClick: window.home.printPost,
    title: 'Post!',
  })}

  ${PostsContainer({
    content: '',
  })}`;
}

window.home = {
  logOut,
  printPost,
  Post,
  // storePostsLocally,
  // printStoredPosts,
  // addNewPost,
};

export default Home;

function Profile (){
    loadPost()
    const template = `
    <img class='logo' src='img/Logo.png'/>
    <div class='profile-card'>
        <img class='profile-img>
        <p class='profile-name'>${window.name}</p>
        <p class='profile-email'></p>
    </div>
    
    <div id='userpost'></div>`


    return template
}

function loadPost() {
    const user = firebase.auth().currentUser;
    const collectionPost = firebase.firestore().collection('posts')
    collectionPost.orderBy('time', 'desc').get().then(snap => {

      snap.forEach(post => {

        if(post.data().user == user.uid){
          addingPost(post);
        }
  })
}) 
}


function addingPost(post){
    const listPost = document.querySelector('#userpost');
    const templatePost = `
    <section class='card-post'>
      <div class='card-texts'>
        <p class='post-text'>${post.data().text}</p>
        <img  src='${post.data().file}'/>
        <p class='likes'>${post.data().likes}
        <p class='date-time'>${post.data().time}</p>
      </div>
    </section>
    `
    listPost.innerHTML += templatePost
  }

export default Profile
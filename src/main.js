import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Feed from './pages/feed.js';
import Profile from './pages/profile.js';



function locationHashChanged() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (location.hash === '#feed') {
        document.querySelector('main').innerHTML = Feed();
        loadImage()
      } else if (location.hash === '#login' || location.hash === '') {
        document.querySelector('main').innerHTML = Login();
      } else if (location.hash === '#signup') {
        document.querySelector('main').innerHTML = Signup();
      } else if (location.hash === '#profile') {
        document.querySelector('main').innerHTML = Profile();
        loadImage()
      }
    }

    else {
      if (location.hash === '#login' || location.hash === '') {
        document.querySelector('main').innerHTML = Login();
      } else if (location.hash === '#signup') {
        document.querySelector('main').innerHTML = Signup();
      }
    }
  });
}

window.addEventListener('load', locationHashChanged);
window.addEventListener('hashchange', locationHashChanged, false);

function loadImage(){
  const inputPhoto = document.getElementById('input-photo')
  inputPhoto.addEventListener('change', (e) => {

    //obter o arquivo
    const file = e.target.files[0];
    
    //criar uma referência de storage
    const storageRef = firebase.storage().ref('post_images/' + file.name)
    
    //upload do arquivo 
    const task = storageRef.put(file)

    //atualizar  a barra de progresso
    task.on('state_changed', 
    
      function progress(snapshot){
        document.getElementById('uploader').style.display='block'
        const percentage = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },

      function error (){
        const errorMessage = document.getElementById('messageImage');
        errorMessage.textContent = 'Não foi possível carregar a imagem.'
        setTimeout(()=>{
          errorMessage.textContent = ''
        }, 3000)
      },

     function complete (){
      const errorMessage = document.getElementById('messageImage');
        errorMessage.textContent = 'Imagem carregada! '
        setTimeout(()=>{
      document.getElementById('uploader').style.display='none'
        }, 3000)

      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      document.getElementById('image-preview-container').innerHTML += `
      <img id='image-preview' class='image-preview' src="${downloadURL}">
      `
      });
        
      }
    )
  })
}


//#login página de login
//#signup href do "cadastre-se"
//#feed página do feed
//Logout(), função que faz logout
//Login()função que tem a tela do login
//Signup() função da tela de cadastro
//Signout()função do botão signout;
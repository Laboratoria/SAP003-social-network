import Login from './pages/login.js';
import Cadastro from './pages/cadastro.js';
import Home from './pages/home.js';


function init() {
  document.querySelector('main').innerHTML = Home();
}

window.addEventListener('load', init);


function locationHashChanged() {
  switch (location.hash) {
    case '#cadastro.js':
    document.querySelector('main').innerHTML = Cadastro();
    break;
    case '#home.js':
    document.querySelector('main').innerHTML = Home();
    break;
    case '#login.js':
    document.querySelector('main').innerHTML = Login();
    break;
      
  }
  
}

window.addEventListener("hashchange", locationHashChanged, false);

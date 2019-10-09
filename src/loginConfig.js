function uiConfig() {
  return {
    signInFlow: 'popup',
    signInSuccessUrl: '#',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

  };
}

// function configureLogin() {
//   document.querySelector('main').innerHTML += "<div id=\"firebaseui-auth-container\"></div>"
//   const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
//   ui.start("#firebaseui-auth-container", uiConfig());
// };

// const loginConfig = {
//   uiConfig,
//   configureLogin
// }

export default uiConfig;

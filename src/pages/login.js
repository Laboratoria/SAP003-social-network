function uiConfig() {
  return{
    signInFlow: "popup",
    signInSuccessUrl: "#",
    signInOptions:[
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };
};

function configureLogin() {
  document.querySelector('main').innerHTML += "<div id=\"firebaseui-auth-container\"></div>"
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
  ui.start("#firebaseui-auth-container", uiConfig());
};

const login = {
  uiConfig,
  configureLogin
}

export default login;

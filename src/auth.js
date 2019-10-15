function isAuthenticated() {
  return !!JSON.parse(localStorage.getItem('user'));
}

export default isAuthenticated;

//Não precisa mais deste documento
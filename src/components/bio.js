const Bio = (user) => {
  const template = `
  <div class="users">
  <img src="${user.image || 'https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png'}" class="img-usuario">
   <div class="bio">
    <p>Nome: ${user.name || 'Nome'}</p>
    <p>Idade: ${user.age || 'Idade'} anos</p>
    <p>Profissão: ${user.profession || 'Profissão'}</p>
    </div>
  </div>
  `;
  return template;
};
export default Bio;

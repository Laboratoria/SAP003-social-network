const Bio = (user) => {
  const template = `
  <div class="users">
  <img src="images/img-user.png" class="img-usuario">
   <div class="bio">
    <p>${user.name || 'Nome'}</p>
    <p>${user.age  || 'Idade'}</p>
    <p>${user.profession || 'Profissão'}</p>
    </div>
  </div>
  `;
  return template;
};
export default Bio;

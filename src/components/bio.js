const Bio = (user) => {
  const template = `
  <div class="users">
  <img src="images/img-user.png" class="img-usuario">
   <div class="bio">
    <p>${user.name || ''}</p>
    <p>${user.age  || ''}</p>
    <p>${user.profession || ''}</p>
    </div>
  </div>
  `;
  return template;
};
export default Bio;

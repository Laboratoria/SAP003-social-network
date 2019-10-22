function Profile(props) {
  const templateProfile = `
  <div class='srdosaneis'> ${postListProfile(props)}</div>
  `;
  return templateProfile;
}

function postListProfile(props) {
  props.posts.forEach((element) => {
    console.log(element.data().text);
  });
}

export default Profile;

import Feed from './feed.js';
//import { UserInfo, AddBio, CreateBio } from '../posts/edit-profile.js';

// function UserDescription(){
//   const template =`
//     <section class=‘user-profile’>
//         <div class=‘profile-name’>
//         ${UserInfo()}
//         </div>
//         <section class=‘user-bio’>
//           ${AddBio()}
//         </section>
//         ${CreateBio()}
//         <div class=“edit-button”></div>
//       </section>
//       `;
//     return template;
//   }

function Profile() {
  //userDescription()
  return Feed()
}
export default Profile;


// function postListProfile(props) {
//   props.posts.forEach((element) => {
//     console.log(element.data().text);
//   });
//}
import Button from "../components/button.js";
import Select from "../components/select.js";
import Post from "../components/post.js";
import Timeline from '../components/timeline.js';

export const Mural = () => {
	const template = `
	<header>
		<nav>
			<li>
				<select id="select" onchange="changeSelect()">
					${Select({name:'Mural', id:'mural', class:'class-mural', value:'mural', selected:"selected"})}
					${Select({name:'Editar Perfil', id:'editar-perfil', class:'class-editar-perfil', value:'editar'})}
					${Select({name:'Logout', id:'logout', class:'class-logout', value:'logout'})}
				</select>
			</li>
			<li>Logo</li>
			<li>Logout</li>
		</nav>
	</header>

	<section>
		<form id='post-form'>
			${Post({id:'post', placeholder:"Qual a  bruxaria de hoje?", rows:'5', cols:'50'})}
			${Button({class:'btn-post', id:'btn-post-send', type:'submit', title:'Post', onclick: post})}
		</form>
	</section>
	<ul id='timeline'>
		${Timeline({ class:'timeline-item'})}
	</ul>`;

	return template;
}

const changeSelect = () => {
	if (document.getElementById('select').value === "mural") {
		window.location.hash = "mural";
	} else if (document.getElementById("select").value === "editar") {
		window.location.hash = "editar";
	} else {
		logout();
	}
}


//PAREI AQUI
const sendAndRetrievePost = () => {
	const user = firebase.auth().currentUser;

	const text = document.getElementById('post').value;

	const post = {
		name: user.email,
		text
	}

	firebase.firestore().collection('posts').add(post);

	document.getElementById('post-form').reset();

	const timeline = document.getElementById('timeline');
	const allPosts = firebase.firestore().collection('posts');

	timeline.innerHTML = '...';

	allPosts.get().then(snap => {
		snap.forEach(postUser => {
			addPost(postUser)
		})
	})

}

const logout = () => {

	firebase.auth().signOut().then(function() {
		window.location.hash = 'home';
	}).catch(function(error) {
	});
}

window.changeSelect
 = changeSelect;

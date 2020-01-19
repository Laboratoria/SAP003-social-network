import Button from '../components/button.js';
import Select from '../components/select.js';
import Post from '../components/post.js';
import Input from '../components/input.js';

let template = '';

const changeSelect = () => {
	if (document.getElementById('select').value === 'feed') {
		window.location.hash = 'feed';
	} else if (document.getElementById('select').value === 'edit') {
		window.location.hash = 'edit';
	}
}

const sendAndRetrievePost = () => {
	const user = firebase.auth().currentUser;
	const text = document.getElementById('post').value;
	const post = {
		name: user.email,
		text,
		userID: user.uid,
		date: firebase.firestore.FieldValue.serverTimestamp(),
		likes: []
	}
	firebase.firestore().collection('posts').add(post);
	document.getElementById('post-form').reset();
}

const logout = () => {
	firebase.auth().signOut().then(function () {
		window.location.hash = '';
	}).catch(function (error) {
	});
}

const editar = (id) => {
	document.querySelector(`.post[post-id='${id}']`).focus();
	document.querySelector(`.post[post-id='${id}']`).onblur = () => {
		console.log('oi')
		const user = firebase.auth().currentUser;
		const postEdit = document.querySelector(`[post-id='${id}']`).innerText;
		const post = firebase.firestore().collection('posts').doc(id);
		post.update({
			text: postEdit
		})
	}
}

const like = (id) => {
	let htmlTagLikes = document.querySelector(`[like-id='${id}']`);
	const user = firebase.auth().currentUser;

	firebase.firestore().collection('posts').doc(id).get().then(snap => {
		htmlTagLikes.innerHTML = snap.data().likes.length
		let array = snap.data().likes
		if (!snap.data().likes.includes(user.email)) {
			array.push(user.email)
			firebase.firestore().collection('posts').doc(id).update({likes: array})
			firebase.firestore().collection('posts').doc(id).get().then(snap => htmlTagLikes.innerHTML = snap.data().likes.length)			
		} else {
			let arrEmail = array.indexOf(user.email)
			array.splice(arrEmail, 1)
			firebase.firestore().collection('posts').doc(id).update({likes: array})
			firebase.firestore().collection('posts').doc(id).get().then(snap => htmlTagLikes.innerHTML = snap.data().likes.length)			
		}
	})
}

const deletePost = (id) => {
	firebase.firestore().collection('posts').doc(id).delete();
	document.getElementById(id).parentElement.remove();
}

const commentPost = (id) => {
	const input = document.querySelector(`input[data-id='${id}']`);
	firebase.firestore().collection(`posts/${id}/comments`).add({ text: input.value });
	event.target.parentElement.innerHTML += `<p class='ja'>${input.value}</p>`
}

const FeedPage = (props) => {
	window.location.hash = 'feed';
	if (props.post.data().userID === props.user.uid) {
		template += `
			<li class='timeline-item' data-id='${props.post.data().userID}' name='post'>
				<p post-id='${props.post.id}' contenteditable='true' class='post'>${props.post.data().text}</p>
				<p class='date'>${props.post.data().date.toDate().toLocaleString('pt-BR')}</p>
				<p class='user'>${props.post.data().name}</p>
				${Button({ class: 'btn-delete', id: props.post.id, title: '<img src="images/botaodeletee.png" class="icon-delete" />', onclick: deletePost })}
				${Button({ class: 'btn-edit', id: props.post.id, title: '<img src="images/botaoeditar.png" class="icon-edit" />', onclick: editar })}
				${Button({ class: 'btn-likes', likeid: props.user.uid, id:props.post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like, value:'like', name:'btnlike' })}
				<p like-id='${props.post.id}' class="like">${props.post.data().likes.length}</p>
				${Input({ class: 'input-comment', dataId: props.post.id, placeholder: 'Comentários', type: 'text' })}
				${Button({ class: 'btn-comment', id: props.post.id, title:'Comentar', onclick: commentPost })}
				<ul class='comments'>
					${props.comments.map(comment => `
						<li class='comment'>${comment.text}
						<p>colocar usuário</p>
						</li>`).join("")}
				</ul>
			</li>`;		
	} else {
		template += `		
			<li class='timeline-item' data-id='${props.post.data().userID}' name='post'>
				<p post-id='${props.post.id}' contenteditable='true' class='post'>${props.post.data().text}</p>
				<p class='date'>${props.post.data().date.toDate().toLocaleString('pt-BR')}</p>
				<p class='user'>${props.post.data().name}</p>
				${Button({ class: 'btn-likes', likeid: props.user.uid, id:props.post.id, title: '<img src="images/botaolike.png" class="icon-like"/>', onclick: like, value:'like', name:'btnlike' })}
				<p like-id='${props.post.id}' class="like">${props.post.data().likes.length}</p>
				${Input({ class: 'input-comment', dataId: props.post.id, placeholder: 'Comentários', type: 'text' })}
				${Button({ class: 'btn-comment', id: props.post.id, title:'Comentar', onclick: commentPost })}
				<ul class='comments'>
					${props.comments.map(comment => `
						<li class='comment'>${comment.text}
						<p>colocar usuário</p>
						</li>`).join("")}					
				</ul>
			</li>`;
	}
	const fixedTemplate = `
	<header class='navbar'>
			<nav class='banner'>
				<p>${props.user.email}</p>
				<ul class='nav-links'>
					<li class='dropdown-menu'>
						<select class='menu-dropdown' id='select' onchange='changeSelect()'>
							${Select({ name: 'Mural', id: 'feed', class: 'class-feed', value: 'feed', selected: 'selected' })}
							${Select({ name: 'Sobre', id: 'edit-profile', class: 'class-edit-profile', value: 'edit' })}
						</select>
					</li>
					<li><img class='nav-logo' src='images/witchy-navbar.png' alt='navlogo'></li>
					<li>${Button({ class: 'btn-logout', id: 'btn-logout', type: 'submit', title: 'Sair', onclick: logout })}</li>
				</ul>	
			</nav>
		</header>
		<section class='user-profile'></section>
		<section class='post-section'>
			<form id='post-form'>
				${Post({ id: 'post', placeholder: 'Qual a  bruxaria de hoje?', rows: '5', cols: '50' })}
				${Button({ class: 'btn-post', id: 'btn-post-send', type: 'submit', title: '<img src="images/botaopost.png" class="icon-post" />', onclick: sendAndRetrievePost })}
			</form>
		</section>
		<ul id='timeline'>
		${template}
		</ul>
		`;
	return fixedTemplate;
}



window.changeSelect
	= changeSelect;

export default FeedPage;
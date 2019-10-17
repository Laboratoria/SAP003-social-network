

// function formSubmit(event) {
//     event.preventDefault()
// const textInput = document.getElementById("postText");
// const post = {
//     likes: 0,
//     comments:[],
//     text: textInput.value,
//     user_id: "nomeexemplo"
// }
// firebase.firestore().collection("posts").add(post).then(res =>{
//     textInput.value = "";
//     loadData()
// }
// })


// function loadData () {
//     const postlist = document.getElementById("idexemplo");
//     const postCollection = firebase.firestore().collection("posts");
//     postCollection.get().then(snap => {
        
//         //percorre dados
//         snap.forEach(post =>{
//             addPost(post)
//         })
//     })
// }

// //funçaõ que inclui dado na lista criada no html

// function addPost(post) {
//     const postTemplate = `<li>
//     ${post.data().text} ${post.data().likes}
//     </li>`
// }
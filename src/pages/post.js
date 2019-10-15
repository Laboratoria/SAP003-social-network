function savePost() {

  const post = document.querySelector('.post').value;

  db.collection('post').add({
    post: post,    
  })
  .then(function(docRef) {
    //console.log('Document written with ID: ', docRef.id);
    db.collection('post').get()
    .then((snap) => {snap.forEach(doc => {
      
      const feed = `
      <li>
      ${doc.data().post}
      </li>
      `
      document.querySelector('.feed').innerHTML += feed;
           
      
      console.log(`${doc.data().post}`);        
    });
    });   
  })
  .catch(function(error) {
    console.error('Error adding document: ', error);
  });
  
}

export default savePost;
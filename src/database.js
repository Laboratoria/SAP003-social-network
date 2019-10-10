const connect = () => {
  var defaultDatabase = firebase.database();
  let refToData = defaultDatabase.ref();
  refToData.once("value", snapshot => { });
};

const createAccountInDb = data => {
  var db = firebase.firestore();
  var id = db.collection("socialMedia").doc(data.uid);
  id.set(data)
    .then(() => {
      alert("Ocorreu tudo certo");
    })
    .catch(err => console.log(err));
};

 const databases = {
  connect,
  createAccountInDb
}
export default databases
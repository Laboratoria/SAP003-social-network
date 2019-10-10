var firebaseConfig = {
  apiKey: 'AIzaSyBukqPNCaum68DGhsq-exRXVrG3YQBo56U',
  authDomain: 'social-network-b6633.firebaseapp.com',
  databaseURL: 'https://social-network-b6633.firebaseapp.com',
  storageBucket: '<your-storage-bucket-url>'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const db = firebase.firestore();
db.settings({ timeStampsInSnapshots: true })
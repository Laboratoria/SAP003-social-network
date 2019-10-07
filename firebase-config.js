var firebaseConfig = {
  apiKey: 'AIzaSyCS0istzXX1d01HIlwVmNa_ej67Op-eTgk',
  authDomain: 'social-media-b0400.firebaseapp.com',
  databaseURL: 'https://social-media-b0400.firebaseapp.com',
  storageBucket: '<your-storage-bucket-url>'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const db = firebase.firestore();
db.settings({ timeStampsInSnapshots: true })



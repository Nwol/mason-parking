const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const config = {
    apiKey: "",
    authDomain: "mason-parking.firebaseapp.com",
    databaseURL: "https://mason-parking.firebaseio.com",
    projectId: "mason-parking",
    storageBucket: "mason-parking.appspot.com",
    messagingSenderId: "671223025138"
  };

  firebase.initializeApp(config);
  let db = firebase.firestore();
  db.settings({timestampsInSnapshots: true})
  let auth = firebase.auth();
  export default {
      firestore: db,
      auth: auth
  }
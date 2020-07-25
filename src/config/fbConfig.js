import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCn4Tg7J1L2hQ9FLD7NPHvUKrQB2wc6rvU",
    authDomain: "netninja-f0d35.firebaseapp.com",
    databaseURL: "https://netninja-f0d35.firebaseio.com",
    projectId: "netninja-f0d35",
    storageBucket: "netninja-f0d35.appspot.com",
    messagingSenderId: "1091108869995",
    appId: "1:1091108869995:web:2204fd616d4ac1df989e2e",
    measurementId: "G-T9NQX4HBTK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  firebase.firestore().settings( { timestampsInSnapshots: true})

  export default firebase;
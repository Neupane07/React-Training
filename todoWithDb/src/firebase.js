import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD2HmD6HysJ6G33MjN6Oqgzsq9w_T1wEUs",
    authDomain: "todolist-69ba4.firebaseapp.com",
    projectId: "todolist-69ba4",
    storageBucket: "todolist-69ba4.appspot.com",
    messagingSenderId: "867259474159",
    appId: "1:867259474159:web:d88626cc53afb833f87b1a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from 'firebase'
export const config = {
    apiKey: "AIzaSyA4WfLkEP_c3K1wsjMELqX2xftEJkOmU_k",
    authDomain: "react-auth-e0803.firebaseapp.com",
    projectId: "react-auth-e0803",
    storageBucket: "react-auth-e0803.appspot.com",
    messagingSenderId: "444123838854",
    appId: "1:444123838854:web:b0d0357737194e13d91407"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase

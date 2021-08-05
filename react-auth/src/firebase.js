import firebase from 'firebase/app'
import 'firebase/auth'


export const config = {
    apiKey: "AIzaSyA4WfLkEP_c3K1wsjMELqX2xftEJkOmU_k",
    authDomain: "react-auth-e0803.firebaseapp.com",
    projectId: "react-auth-e0803",
    storageBucket: "react-auth-e0803.appspot.com",
    messagingSenderId: "444123838854",
    appId: "1:444123838854:web:b0d0357737194e13d91407"
};
// Initialize Firebase
const app = firebase.initializeApp(config);

export const auth = app.auth();
export default firebase

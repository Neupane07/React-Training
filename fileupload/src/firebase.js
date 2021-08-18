import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB6Rceh-wIld_dfla4KeBiDWzkRcx4PiYw",
    authDomain: "react-video-upload-307bd.firebaseapp.com",
    projectId: "react-video-upload-307bd",
    storageBucket: "react-video-upload-307bd.appspot.com",
    messagingSenderId: "605358564897",
    appId: "1:605358564897:web:75c75eeb465b629bca6560"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
export const storage = firebase.storage();
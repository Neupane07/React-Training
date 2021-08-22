import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBXcQjnf9zIWGnN-gEFM2glXFQu-K1ni0M",
    authDomain: "fb-timeline-ac3dc.firebaseapp.com",
    projectId: "fb-timeline-ac3dc",
    storageBucket: "fb-timeline-ac3dc.appspot.com",
    messagingSenderId: "601869846562",
    appId: "1:601869846562:web:445de183b4ff8b1699627b"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
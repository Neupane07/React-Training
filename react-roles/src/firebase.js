import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase

export const createUserDocument = async (user,additionalData) => {
    if(!user) return;

    const userRef = firebase.firestore().doc(`users/${user.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {email} = user;

        try{
            userRef.set({
                firstName: additionalData.firstName,
                lastName: additionalData.lastName,
                createdAt: new Date(),
                email,
                role: additionalData.role 
            })

        }catch(err){
            console.log('error while creating user ===>',err)
        }
    }
}
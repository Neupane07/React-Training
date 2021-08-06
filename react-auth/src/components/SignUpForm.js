import React from 'react'
import firebase from '../firebase'
import 'firebase/auth'


const SignUpForm = () => {

    const signUp = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(e.target[0].value,e.target[1].value)
        .then((userCredential) => {
            console.log(userCredential)
            console.log(userCredential.user.displayName)
            console.log(userCredential.user.email)
            const userRef = firebase.database().ref('User');
            const user = {
              name: userCredential.user.displayName,
              email: userCredential.user.email,
            }

        userRef.push(user);
        })
        .catch((error) => {
           console.log(error)
        })
    }

    return (
        <div className="ui container">
            <h2>Sign up</h2>
            <form onSubmit={signUp} className="ui form">

                <div className="field">
                    <label>User Name</label>
                    <input className="field" type="text" />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input className="input field" type="password" />
                </div>
                
                <button className="ui button">Submit</button>

                {/* <button className="ui google plus button"
                    onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                >
                    Sign In with Google
                </button> */}

                <button className="ui circular google plus icon button"
                    onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                >
                    <i className="google plus icon"></i>
                </button>

                <button className="ui circular facebook icon button"
                    onClick={() => {
                        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
                        firebase.auth().signInWithPopup(facebookAuthProvider);
                    }}
                >
                    <i className="facebook icon"></i>
                </button>
            </form>
        </div>
    )
}

export default SignUpForm

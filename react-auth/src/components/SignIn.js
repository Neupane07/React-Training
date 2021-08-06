import React from 'react'
import firebase from '../firebase'

const SignIn = () => {

    const signIn = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(e.target[0].value,e.target[1].value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="ui container">
            <h2>Login</h2>
            <form onSubmit={signIn} className="ui form">

                <div className="field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                
                <div className="field">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className="ui button">Submit</button>
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

export default SignIn

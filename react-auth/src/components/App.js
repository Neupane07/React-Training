import React, { useState } from 'react'
import firebase from 'firebase'
import { config } from '../firebase';
import 'firebase/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Navbar from './Navbar';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    const [signedIn, setSignedIn] = useState(false);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    })

    return (
        <>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <ProtectedRoute user={signedIn} exact path="/" component={HomePage} />
                        {signedIn ? '' : <Route path="/signin" component={SignIn} />}
                        <Route path="/signup" component={SignUpForm} />
                    </Switch>
                </div>
            </Router>
            <div>
                {!signedIn ? <button
                    onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                >
                    Sign In with Google
                </button>
                    : ''}
                <button
                    onClick={() => {
                        firebase.auth().signOut();
                    }}
                >
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default App


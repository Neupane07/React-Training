import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import 'firebase/auth'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import HomePage from './HomePage';
import SignIn from './SignIn';
import Navbar from './Navbar';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(()=> {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setSignedIn(true);
            } else {
                setSignedIn(false);
            }
        })
    },[])
    
    return (
        <>
            <Router>
                <div>
                    <Navbar signedIn={signedIn}/>
                    <Switch>
                        <ProtectedRoute user={signedIn} exact path="/" component={HomePage} />
                        {signedIn ? '' : <Route path="/signin" component={SignIn} />}
                        {signedIn ? '' : <Route path="/signup" component={SignUpForm} />}
                        {signedIn ? <Redirect to="/"/> : ''}
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App


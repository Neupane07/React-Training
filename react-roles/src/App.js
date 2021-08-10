import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import firebase from './firebase'
import 'firebase/auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

    const [signedIn, setSignedIn] = useState(false)
    const [currUserId, setCurrUserId] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user.email)
                setSignedIn(true)
                setCurrUserId(user.uid)
            }
        })
    }, [])

    return (
        <div>
            <Router>
                <Switch>
                    <Route component={() => (<SignUp currUserId={currUserId} setCurrUserId={setCurrUserId}/>)} path="/signup"/>
                    <Route component={() => (<SignIn signedIn={signedIn} setSignedIn={setSignedIn} />)} path="/signin" />
                    <Route component={() => (<Home signedIn={signedIn} setSignedIn={setSignedIn} currUserId={currUserId} />)} path="/" exact />
                </Switch>
            </Router>
        </div>
    )
}

export default App

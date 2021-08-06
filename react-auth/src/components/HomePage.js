import React from 'react'
import firebase from '../firebase';
import { useState } from 'react/cjs/react.development';
import UserList from './UserList';


const HomePage = () => {
    const [currUser, setCurrUser] = useState('')

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setCurrUser(user)
        } else {
            
        }
    })
    return (
        <div className="ui container">
            <h2 className="ui header">Homepage</h2>
            <p>
                Welcome to the home page <br/>
                Your email : {currUser.email && currUser.email}<br/>
                {currUser.displayName && `Your name: ${currUser.displayName}`} 
            </p>
            <UserList/>

            <button className="ui button"
                    onClick={() => {
                        firebase.auth().signOut();
                    }}
                >
                    Sign Out
            </button>
        </div>
    )
}

export default HomePage
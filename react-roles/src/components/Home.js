import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router'
import firebase from '../firebase'

const Home = ({ signedIn, setSignedIn,currUserId }) => {
    const [userRole,setUserRole] = useState('')
    const [userName, setUserName] = useState('')
    const [profilePic,setProfilePic] = useState('')
    const history = useHistory();

    useEffect(() => {
        if (!signedIn) {
            history.push("/signin")
        }

        const getUserDocument = async () => {
            console.log(currUserId)
            
            const userRef = await firebase.firestore().doc(`users/${currUserId}`);

            const url = await firebase.storage().ref(`users/${currUserId}/profile.jpg`).getDownloadURL()
            console.log(url)
            setProfilePic(url)
            
            const snapshot = await userRef.get();
        
            if(!snapshot.exists){
                console.log('no user exists')
            }else{
                console.log(snapshot.data().firstName)
                setUserName(snapshot.data().firstName)
                setUserRole(snapshot.data().role);
            }
        }

        currUserId && getUserDocument()

    },[signedIn,history,currUserId])

    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                alert('You are signed out')
                setSignedIn(false);
            })
            .catch(err => {
                alert('An error occured')
            })
    }

    return (
        <div className="ui container segment">
            <div className="ui card">
                <div className="image">
                    <img src={profilePic} alt="profile"/>
                </div>
                <div className="content">
                    <p className="header">{userName}</p>
                    <div className="description">
                    {userRole}
                    </div>

                </div>

            </div>

            <button className="ui button" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Home

import React,{useState, useEffect} from 'react'
import firebase from '../firebase'


const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const userRef = firebase.database().ref('User');
        userRef.on('value',(snapshot) => {
            const users = snapshot.val();
            const userList = [];
            for(let id in users){
                userList.push({id,...users[id]});
            }

            setUsers(userList);
        })
    },[])

    const renderedUsers = users.map((user) => {
        console.log(user)
        return (
            <div key={user.id} className="item">
                <div className="content">
                    <div className="header">{user.email}</div>     
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="ui container"> 
                <h2>Registered Users</h2>
                <div className="ui middle aligned divided list">
                        {renderedUsers}
                </div>
            </div>
        </>
    )
}

export default UserList

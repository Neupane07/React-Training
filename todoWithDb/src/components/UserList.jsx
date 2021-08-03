import React,{useState, useEffect} from 'react'
import firebase from 'firebase'


const UserList = ({handleDelete,handleEdit}) => {

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

    const renderedUsers = users.map((user,idx) => {
        return (
            <div key={user.id} idx={idx} className="item">
                <div className="content">
                    <div className="header">{user.name}</div>
                     Age: {user.age}
                    </div>
                <div className="right floated content">
                    <button className="ui button" onClick={() => handleDelete(user.id)}>Delete </button>
                </div>
                <div className="right floated content">
                    <button className="ui button" onClick={() => handleEdit(user.id)}> Edit</button>
                </div>
            </div>
        )
    })



    return (
        <div className="ui middle aligned divided list">
                {renderedUsers}
        </div>
    )
}

export default UserList

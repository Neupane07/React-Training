import React,{useState,useEffect} from 'react';
import Form from './components/Form';
import UserList from './components/UserList';

import firebase from './firebase';

const App = () => {
    const [name,setName] = useState('')
    const [age, setAge] = useState('')
    const [users,setUsers] = useState([]);
    const [editing,setEditing] = useState(false);
    const [editingId,setEditingId] = useState(0);

    useEffect(() => {
        const userRef = firebase.database().ref('User');
        userRef.on('value',snapshot => {
            const users = snapshot.val();
            const usersList = [];
            for(let id in users){
                usersList.push({id,...users[id]})
            }
            setUsers(users);
        })
    },[])

    const handleDelete = idx => {
        const userRef = firebase.database().ref('User').child(idx);
        userRef.remove();
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(editing){
            if(name==='' || age ===''){
                return;
            }
            const userRef = firebase.database().ref('User').child(editingId)
            userRef.update(
                {
                    name: name,
                    age: age
                }
            );
            setName('')
            setAge('')
            setEditing(false);
        }else{
            if(name==='' || age ===''){
                return;
            }
        const userRef = firebase.database().ref('User');
        const user = {
            name,
            age
        }

        userRef.push(user);
        }
        setName('')
        setAge('')
        
    }

    const handleEdit = idx => {
        setEditing(true);
        setEditingId(idx);
        setName(users[idx].name);
        setAge(users[idx].age);

        console.log(idx)
        
    }

    return ( 
        <div>           
            <div>
                <Form name={name} age={age} setName={setName} setAge={setAge} handleSubmit={handleSubmit} />
            </div>
            <div className="ui container">
                <UserList users={users} handleDelete={handleDelete} handleEdit={handleEdit}/>
            </div>
        </div>
    )
}

export default App;

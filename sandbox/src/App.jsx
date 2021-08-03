import React,{useState} from 'react';

const App = () => {
    const [name,setName] = useState('')
    const [age, setAge] = useState('')
    const [users,setUsers] = useState([]);
    const [editing,setEditing] = useState(false);
    const [editingId,setEditingId] = useState(0);

    const handleSubmit = e => {
        if(editing){
            e.preventDefault();

            const temp = [...users];
            temp[editingId].name = e.target[0].value;
            temp[editingId].age = e.target[1].value;
            setUsers(temp);

            setName('')
            setAge('')

            setEditing(false)

        }else{
            e.preventDefault();
            if(name==='' || age ===''){
                return;
            }
            const newUser = {
                name: name,
                age: age,
            }
            const temp = [...users];
            temp.push(newUser);
            setUsers(temp);
            setName('')
            setAge('')
        }
    }

    const handleDelete = idx => {
        const temp = [...users];
        temp.pop(idx);
        setUsers(temp);
    }

    const handleEdit = idx => {
        setEditing(true);
        setEditingId(idx);
        setName(users[idx].name);
        setAge(users[idx].age);
    }

    const renderedUsers = users.map((user,idx) => {
        return (
            <div key={user.name} idx={idx} className="item">
                <div className="content">
                    <div className="header">{user.name}</div>
                     Age: {user.age}
                    </div>
                <div className="right floated content">
                    <button className="ui button" onClick={() => handleDelete(idx)}>Delete </button>
                </div>
                <div className="right floated content">
                    <button className="ui button" onClick={() => handleEdit(idx)}> Edit</button>
                </div>
            </div>
        )
    })
    
    return ( 
        <div>           
            <div>
                <form onSubmit={handleSubmit} className="ui form" action="">
                    <div className="field">
                        Enter name
                        <input value={name}  className="ui input" onChange={e => setName(e.target.value)} type="text"/>
                    </div>
                    <div className="field">
                        Enter age
                        <input value={age} className="ui input" onChange={e => setAge(e.target.value)} type="text"/>
                    </div>
                    
                    <button className="ui button">Submit</button>
                </form>
            </div>

            <div className="ui container">
            <div className="ui middle aligned divided list">
                {renderedUsers}
            </div>
            </div>
            
        </div>
    )
}

export default App;

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Counter from './components/Counter';

const App = () => {

    const [users, setUsers] = useState([])
    const [show,setShow] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            const {data} = await axios.get('https://reqres.in/api/users?page=1');
            console.log(data.data)
            setUsers(data.data);
        }
            fetchData();
    },[])

    const renderedUsers = users.map(user => {
        return (
            <div key={user.id} className="item">
                <img className="ui avatar image tiny" src={user.avatar} alt={user.first_name}/>
                <div className="content">
                    <div className="header">{user.first_name}</div>
                    {user.email}
                </div>
            </div>
        )
    })

    return (
        <>
            <div>
                <button className="ui button" onClick={() => setShow(!show)}>Show users</button>
            </div>

            <div className="ui celled list">
                { show ? renderedUsers : ''}
            </div>

            <Counter/>
        </>
    )
}

export default App

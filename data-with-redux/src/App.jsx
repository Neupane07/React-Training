import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { listUsers } from './redux/actions/userActions'

const App = () => {
    const dispatch = useDispatch()

    const usersList = useSelector(state => state.usersList)
    
    const { users } = usersList

    // useEffect(()=> {
    //     dispatch(listUsers())
    // },[dispatch])

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
                <button className="ui button" onClick={() => dispatch(listUsers())}>Show users</button>
            </div>

            <div className="ui celled list">
                { renderedUsers }
            </div>
        </>
    )
}

export default App

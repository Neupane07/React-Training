import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({signedIn}) => {
    return (
        <div>
            <nav>
                <ul style={{ listStyle: 'none' }}>
                { signedIn ?  <li><Link to="/">Home</Link></li> : ''}
                { !signedIn ? <li><Link to="/signin">SignIn</Link></li>: ''}
                { !signedIn ? <li><Link to="/signup">SignUp</Link></li> : ''}
            </ul>
            </nav>
        </div>
    )
}

export default Navbar

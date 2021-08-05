import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul style={{ listStyle: 'none' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">SignIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

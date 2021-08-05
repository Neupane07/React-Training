import React from 'react'

const SignUpForm = () => {
    return (
        <div>
            <h2>Sign up</h2>
            <form>
                User name: <input type="text" /><br />
                password: <input type="password" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm

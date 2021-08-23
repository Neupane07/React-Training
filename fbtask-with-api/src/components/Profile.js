import React from 'react'

const Profile = () => {
    return (
        <>
            <div
                className="container d-flex align-items-center justify-content-center position-relative rounded"
                style={{ background: 'url("https://images.unsplash.com/photo-1429041966141-44d228a42775?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")', height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <img
                    className="profile-img rounded-circle img-fluid"
                    src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/171x180"
                    alt="profile"
                />
            </div>
            <div className="container mt-5">
                <h2 className="text-center pt-5" >Jerry Luis</h2>
                <hr />
            </div>
        </>
    )
}

export default Profile

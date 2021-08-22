import React, { useEffect, useState } from 'react'
import CreatePostModal from './CreatePostModal'
import Posts from './Posts';


const Timeline = () => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState(`What's on your mind?`);

    const handleClose = () => {
        setShow(false)
        setInput('')
    }
    const handleShow = () => setShow(true);



    return (
        <>
            <div className="d-flex flex-column container">
                <div>
                    <h2 className="text-center">Timeline</h2>
                </div>
                <hr />
                <div className="my-2">
                    <img
                        className="rounded-circle-sm img-fluid"
                        src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/171x180"
                        alt="profile"
                        width={23}
                    />
                    <span className="p-3 lg-ms-5" style={{ width: '80%' }} onClick={handleShow}>What's on your mind?</span>
                </div>
            </div>
            <CreatePostModal
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                input={input}
                setInput={setInput}
            />
            <Posts username='jessy' />

        </>
    )
}

export default Timeline

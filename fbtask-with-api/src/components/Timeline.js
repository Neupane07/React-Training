import React, { useState } from 'react'
import CreatePostModal from './CreatePostModal'
import FilterPostsModal from './FilterPostsModal';
import Posts from './Posts';


const Timeline = () => {
    const [show, setShow] = useState(false);
    const [filterShow, setFilterShow] = useState(false)
    const [input, setInput] = useState(`What's on your mind?`);
    const [filterDate, setFilterDate] = useState('')
    const [posts, setPosts] = useState([])
    const [orderBy, setOrderBy] = useState(1)

    const handleClose = () => {
        setShow(false)
        setInput('')
    }
    const handleShow = () => setShow(true);



    return (
        <>
            <div className="container">
                <div>
                    <h2 className="text-center">Timeline</h2>
                </div>
                <hr />
                <div className="card p-2 mb-3">
                    <div className="d-flex justify-content-between">
                        <img
                            className="rounded-circle-sm img-fluid"
                            src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/171x180"
                            alt="profile"
                            width={23}
                        />
                        <span className="ms-2 my-auto flex-grow-1" onClick={handleShow}>What's on your mind?</span>
                    </div>
                </div>
                <div className="card p-2 mb-3">
                    <div className="d-flex justify-content-between">
                        <h2>Posts</h2>
                        <button onClick={() => setFilterShow(true)} className="btn btn-secondary">Filter</button>
                    </div>
                </div>
            </div>
            <CreatePostModal
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                input={input}
                setInput={setInput}
                posts={posts}
                setPosts={setPosts}
            />
            <FilterPostsModal
                filterShow={filterShow}
                setFilterShow={setFilterShow}
                filterDate={filterDate}
                setFilterDate={setFilterDate}
            />
            <Posts
                username='Jerry Luis'
                posts={posts} setPosts={setPosts}
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                filterDate={filterDate}
                setFilterDate={setFilterDate}
            />


        </>
    )
}

export default Timeline

import React, { useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { storage } from '../firebase'

const CreatePostModal = ({ handleClose, show, input, setInput, setPosts, posts }) => {

    const [backgroundImage, setBackgroundImage] = useState('');
    const [file, setFile] = useState({})

    const handleUpload = async () => {
        if (!input && !backgroundImage) return;
        handleClose();
        const storageRef = storage.ref()
        await storageRef.child('images/' + file.name).put(file);
        const downloadUrl = await storageRef.child('images/' + file.name).getDownloadURL();

        await axios.post('http://139.59.47.49:4004/api/post', {
            post: input,
            background: file.name ? downloadUrl : backgroundImage
        })
        let temp = posts;
        temp.push({
            post: input,
            background: file.name ? downloadUrl : backgroundImage
        })
        setPosts(temp)
        setFile({})
        setBackgroundImage('')
        setInput(`What's on your mind?`)
        alert('upload complete')
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <h5 className="text-center col-11">Create Post</h5>
                </Modal.Header>
                <div className="d-flex flex-column gap-2 p-5 modal-container justify-content-center align-items-center" style={{ background: `url("${backgroundImage}")` }}>
                    <input type="text" className="status-caption" value={input} onChange={e => setInput(e.target.value)} />
                </div>
                <div className="btn-carousel">
                    <label className="carousel-btn ms-3 me-2" style={{}} for="upload">📷</label>
                    <span className="mx-2" onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpZGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')}>📼</span>
                    <span onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}>❤️</span>
                    <span className="mx-2" onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}>🎵</span>
                    <span onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1496483648148-47c686dc86a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80')}>🌼</span>
                    <span onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}>🏋️</span>
                    <span onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1565945887714-d5139f4eb0ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}>😊</span>
                    <span className="mx-2" onClick={() => setBackgroundImage('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')}>⌨️</span>
                </div>
                <input type="file" id="upload"
                    onChange={e => { setBackgroundImage(URL.createObjectURL(e.target.files[0])); setFile(e.target.files[0]) }} />
                <div className="d-grid m-3">
                    <Button variant="secondary" size="lg" onClick={handleUpload}>
                        Post
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default CreatePostModal

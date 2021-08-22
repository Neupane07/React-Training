import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import firebase, { storage } from '../firebase'

const CreatePostModal = ({ handleClose, show, input, setInput }) => {

    const [backgroundImage, setBackgroundImage] = useState('');
    const [file, setFile] = useState({})

    const handleUpload = async () => {
        if (!input && !backgroundImage) return;
        handleClose();
        const storageRef = storage.ref()
        await storageRef.child('images/' + file.name).put(file);
        const downloadUrl = await storageRef.child('images/' + file.name).getDownloadURL();

        const db = firebase.firestore()
        await db.collection('posts').add({
            name: file.name,
            imgUrl: downloadUrl,
            caption: input
        })
        setFile({})
        setBackgroundImage('')
        setInput(`What's in your mind?`)
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
                <label className="carousel-btn" style={{ border: '2px solid' }} for="upload"><i className="fa fa-upload"></i></label>
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

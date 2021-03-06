import React, { useState } from 'react'
import { storage } from './firebase'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const UploadForm = () => {
    const [video, setVideo] = useState('')
    const [videoFilePath, setVideoFilePath] = useState(null)
    const [uploading, setUploading] = useState(false)


    const handleUpload = (e) => {
        e.preventDefault();
        setUploading(true)
        if (!video || video.type !== 'video/mp4') {
            alert('video only')
            return;
        }
        setVideo(e.target[0].files[0])
        console.log(e.target[0].files[0])
        storage.ref(`/videos/${video.name}`).put(video)
            .then(() => { alert('file uploaded'); setUploading(false) })
    }
    const handleVideoUpload = (event) => {
        if (!event.target.files[0]) {
            return;
        }
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
        setVideo(event.target.files[0])
        console.log("from handleVideoUpload" + event.target.files[0])
    };
    return (
        <div>
            <form className="ui form" onSubmit={handleUpload}>
                <div className="field">
                    <label>Select video to upload (mp4 files only)</label>
                    <input type="file" onChange={handleVideoUpload} />
                </div>
                <button className="ui button">Upload</button>{uploading ? `Uploading...` : ''}
                {videoFilePath ? <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} /> : ''}
            </form>
            <Link to="/videos">See all videos</Link>
        </div>
    )
}

export default UploadForm

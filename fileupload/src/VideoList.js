import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { storage } from './firebase';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'

const VideoList = () => {
    const history = useHistory();
    const [videosList, setVideosList] = useState([])
    useEffect(() => {
        const fetchVideos = async () => {
            const videosRef = storage.ref().child('videos');
            const videosList = await videosRef.listAll();
            const videos = videosList.items;

            videos.map(async vid => {
                let url = await vid.getDownloadURL()
                console.log(url)
                setVideosList(prevVideosList => ([...prevVideosList, url]))
            })
        }
        fetchVideos();

    }, [])

    const renderVideos = videosList.map((video) => {
        return (
            <>
                <Router>
                    <ReactPlayer url={video} width="50%" height="50%" controls={true} />
                </Router>
            </>
        )
    })

    return (
        <div>
            <Link to="/" onClick={() => history.push("/")}>Home</Link>
            {renderVideos}<br />
        </div>
    )
}

export default VideoList

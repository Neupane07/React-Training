import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { storage } from './firebase';

const VideoList = () => {
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
                <ReactPlayer url={video} width="50%" height="50%" controls={true} />
            </>
        )
    })

    return (
        <div>
            {renderVideos}<br />
        </div>
    )
}

export default VideoList

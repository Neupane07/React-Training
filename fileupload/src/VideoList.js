import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import firebase from './firebase'
import { storage } from './firebase';

const VideoList = () => {
    const [videosList, setVideosList] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('')



    useEffect(() => {
        let temp = []
        const fetchVideos = async () => {
            const videosRef = storage.ref().child('videos');
            const videosList = await videosRef.listAll();
            const videos = videosList.items;
            setVideosList(videos)
            console.log(videosList)

            videos.map(async vid => {
                let url = await vid.getDownloadURL()
                console.log(url)
                setUrl(url)
                temp.push(url)
            })
        }
        fetchVideos();
        setVideosList(temp)

    }, [])

    return (
        <div>
            {VideoList.length}<br />
            {url}
        </div>
    )
}

export default VideoList

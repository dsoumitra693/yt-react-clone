import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export const VideoTest = () => {
    const [progressInterval, setProgressInterval] = useState(0)
    return (
        <ReactPlayer
            url={`http://localhost:5000/media/video`}
            className="react-player"
            controls
            progressInterval={progressInterval}
            onSeek={(e) => {
                setProgressInterval(e)
            }}
            onProgress={({ played, playedSeconds, loaded, loadedSeconds }) => {
                console.log(played, playedSeconds, loaded, loadedSeconds,)
            }}
        />
    )
}

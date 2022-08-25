import React from 'react'
import VideoItem from './viditem'

const VideoList = ({ videos, onVideoSelect }) => {
    const viditem = videos.map(video => {
        return (
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video} 
            />
        )
    })

    // console.log(videos)

    return (
        // <div>{props.videos.length}</div>
        <div className='ui relaxed divided list'>{viditem}</div>
    )
}

export default VideoList
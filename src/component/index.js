import React, { Component, useEffect, useState } from 'react'
import SearchBar from './search'
import youtube from '../api/youtube'
import VideoList from './vidlist'
import VideoDetail from './viddetail'
import useVideos from '../hooks/useVideos'

export const Index = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const [videos, search] = useVideos('buildings')
    
    // default sa search input fetch from onTermSubmit
    useEffect(() => {
        // ngaita nato way na kuha ang data dayon kai sa mag kuha pata sa response
        // if e agi nato sa res(response) ma duha ug kuha or ma doble atong response
        // atong goal sa setSelectedVideos kuha nlng ta sa 'videos' state na naa sulod na array na g response from 'search'
        setSelectedVideo(videos[0])
    }, [videos])

    // term(parameter)
    // ang onTermSubmit inig pasa nato to onFormSubmit ang onTermSubmit mag expect cya na pasahan cya ug 'state' or data which is mao naa tai parameter na 'term'
    // const onTermSubmit = async (term) => {
    //     const res = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     })

    //     setVideos(res.data.items)
    //     setSelectedVideo(res.data.items[0]) 
    // }

    // like sa onTermSubmit ang onVideoSelect inig pasa nato to VidItem ang onVideoSelect mag expect cya ma pasahan ug 'state' or data 
    // const onVideoSelect = (video) => {
        // console.log('From the App', video)
    //     setSelectedVideo(video)
    // }

    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            {/* I have {this.state.videos.length} videos. */}
            {/* inig click nato sa video sa VideoList then e view dayon ang VideoDetail */}
            {/* if e comment nimo ang 'this.setState({ selectedVideo: video })' sa onVideoSelect function dili cya mo display or dili mo work */}
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Index


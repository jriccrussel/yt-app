import React, { Component } from 'react'
import SearchBar from './search'
import youtube from '../api/youtube'
import VideoList from './vidlist'
import VideoDetail from './viddetail'

class Index extends Component {
    state = { 
        videos: [],
        selectedVideo: null 
    }

    // term(parameter)
    // ang onTermSubmit inig pasa nato to onFormSubmit ang onTermSubmit mag expect cya na pasahan cya ug 'state' or data which is mao naa tai parameter na 'term'
    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        // console.log(term)
        this.setState({ 
            videos: res.data.items,
            selectedVideo: res.data.items[0] 
        })
    }

    // like sa onTermSubmit ang onVideoSelect inig pasa nato to VidItem ang onVideoSelect mag expect cya ma pasahan ug 'state' or data 
    onVideoSelect = (video) => {
        // console.log('From the App', video)
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/* I have {this.state.videos.length} videos. */}
                {/* inig click nato sa video sa VideoList then e view dayon ang VideoDetail */}
                {/* if e comment nimo ang 'this.setState({ selectedVideo: video })' sa onVideoSelect function dili cya mo display or dili mo work */}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index

import React, { Component, useEffect, useState } from 'react'
import youtube from '../api/youtube'

// defaultSearchTerm - e add nato na default search
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // rename onTermSubmit to ssearch
        search(defaultSearchTerm)
    }, [defaultSearchTerm])


    // rename onTermSubmit to ssearch
    const search = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        setVideos(res.data.items)

        // remove setSelectedVideo like setVideos pdi ra nato pasahan ug 'videos' state
        // note: pasa ra ta 'videos' state ddto na sa index.js were ato e butang ang videos state sa setSelectedVideo na butang sulod sa useEffect
        // note: make sure ddto sa index.js sa useEffect dont forget to add ang 'videos' state sa dependency array sa useEffect '[]' if wla cya naka butang ang mga select video only render once, and dapat in every search nato dapat ma display ang select video so nag rerender ang select video thats why we need to add ang videos sa dependency array sa useEffect
        // setSelectedVideo(res.data.items[0]) 
    }

    return [videos, search] // rename onTermSubmit to ssearch
}

export default useVideos
import axios from "axios"

const KEY = 'AIzaSyBTCY6z-dFkHKx5C5J47Qz2z14FyH8F0cU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
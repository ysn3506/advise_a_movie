import axios from "axios";



export default axios.create({
    baseURL: process.env.REACT_APP_TMDB_URL,
    withCredentials: false,
    headers:{
        Accept: "application/json",
        'Content-Type':"application/json"
    }
})
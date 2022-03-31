import axios from 'axios';

const authApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

export default authApiInstance;
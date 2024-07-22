import axios from "axios";
import { authHeaders } from '../utils/authHeaders';


const contactInfoAPI = axios.create({
    baseURL: process.env.REACT_APP_API_CONTACT_INFOES,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization' : authHeaders(),
        "Accept": "*/*",
        "Access-Control-Allow-Origin" : "*"
    },
    withCredentials: true
})

export default contactInfoAPI
import axios from "axios";

export const api = axios.create(
    {
        baseURL: '/',
        timeout: 15000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
)

api.interceptors.request.use(
    response => response,
    error => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)
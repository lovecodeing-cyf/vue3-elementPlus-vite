import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_BAE_URL,
    timeout: 5000
})

export default http
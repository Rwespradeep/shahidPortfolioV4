import axios from 'axios';

const instance = axios.create({
    //baseURL: "http://localhost:9000",
    baseURL: "https://shahid-website-server.vercel.app"
});

export default instance;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-gateway-sigma.vercel.app/api',
    timeout: 1000,
});

export default api;
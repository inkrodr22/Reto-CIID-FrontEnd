import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-gateway-jy5onp2pp-inkrodr22s-projects.vercel.app/api',
    timeout: 1000,
});

export default api;
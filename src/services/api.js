import axios from 'axios';

const api = axios.create({
	baseURL: 'https://rentro-backend-1.onrender.com/api',
	withCredentials: true,
});

export default api;

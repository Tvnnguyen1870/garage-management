import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://3.1.40.228:3500/',
});

axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('accessToken') ?? '';

export default axiosInstance;
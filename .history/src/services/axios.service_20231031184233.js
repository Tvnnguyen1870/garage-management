import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.1.40.228:3500/',
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken') ?? '';
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axiosInstance;

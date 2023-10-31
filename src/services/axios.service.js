import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://3.1.40.228:3500/',
});

axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg3MTY1ODAsImV4cCI6MTY5ODc1MjU4MH0.hyfGa8O8sKIsW3U5C7Q2p_c6J__mpD67F-EZaFrWAoQ';
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

export default axiosInstance;
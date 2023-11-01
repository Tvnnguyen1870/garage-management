import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.1.40.228:3500/',
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization =
      localStorage.getItem(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFlYjJjNzAxLTc4MWYtNDQyZS1hODQyLTc3ZDdlZTIxZmJiMCIsImVtYWlsIjoibmhvbTFAZ3JyLmxhIiwiZnVsbE5hbWUiOiJOaG9tIDEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTg3NDQ4MzQsImV4cCI6MTY5ODc4MDgzNH0.PXbDvbYMEy_ho0MiS1nzBW2N4DLCnKyPlweBo-ug6mw',
      ) ?? '';
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axiosInstance;

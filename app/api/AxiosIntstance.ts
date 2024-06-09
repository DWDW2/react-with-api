import axios from 'axios';
import { useRouter } from 'next/router';
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers:{
    'Content-Type': 'application/json',
  }
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('Data token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config)
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response.data);
      if (error.response.status === 401) {
        console.log('Unauthorized, redirecting to login...');
      } else if (error.response.status === 403) {
        console.log('Forbidden, you do not have permission.');
      } else {
        console.log('Error status code:', error.response.status);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

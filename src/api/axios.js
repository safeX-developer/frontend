import axios from 'axios';
import { getCookie } from './cookies';


const backendUrl = ()=>{
  let localhostUrl = "http://localhost:8000"
  let remoteUrl = "https://safex.onrender.com"
  const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
  ? localhostUrl : remoteUrl
  return _api
}

const api = axios.create({
  baseURL: backendUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});
api.interceptors.request.use(
  (config) => {
    // Do Add auth token
    const token = getCookie("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
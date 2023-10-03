import axios from 'axios';
import { postRefreshToken } from './Auth/postRefreshToken';

export const apiChef = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiChef.interceptors.request.use(
  async (config) => {
    const expToken = localStorage.getItem('exp_date')

    if (!expToken) return config;

    if(Date.parse(Date())>Date.parse(expToken??'')){
      try {
        await postRefreshToken()
    } catch (error) {
      alert('Autenticação expirada, faça login novamente')
      window.location.href = '/login';
      }
    }
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } 

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiChef.interceptors.response.use(
  response => {

    return response
  },
  error=>{
    if (error.response.status===401){
      const expToken = localStorage.getItem('exp_date')
      if (!expToken) return Promise.reject(error)
      else{
      console.log('Autenticação expirada, faça login novamente')
      localStorage.clear()
      alert('Autenticação expirada, faça login novamente')
      window.location.href = '/login';
    }}
    return Promise.reject(error)
  }

)
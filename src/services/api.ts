import axios from 'axios';

export const apiChef = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

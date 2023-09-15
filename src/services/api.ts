import axios from 'axios';

export const apiChef = axios.create({
  baseURL: import.meta.env.URL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

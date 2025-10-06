import axios from 'axios';

export const fakeStoreAPI = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    'Content-Type': 'application/json',
  },
});
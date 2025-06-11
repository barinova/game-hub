import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '',
  },
});

import axios from 'axios';
const BASE_URL = 'http://www.omdbapi.com';

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

client.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      apikey: 'cae06b86',
      type: 'movie',
    },
  };
});

export {client};
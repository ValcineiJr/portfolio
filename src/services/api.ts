import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DB_HOST}api/`,
});

export default api;

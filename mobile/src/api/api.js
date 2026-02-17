import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  if (global.token) {
    config.headers.Authorization = `Bearer ${global.token}`;
  }
  return config;
});

export default api;

import axios, {AxiosError} from 'axios';
import {accessTokenStorageKey} from "./consts.ts";

// hardcoded for now
const baseURL = "http://localhost:8080/api";

const instance = axios.create({
  baseURL,
})

instance.interceptors.request.use((request,) => {
  const token = localStorage.getItem(accessTokenStorageKey);

  if (!token) {
    return Promise.reject(new AxiosError("no access token in storage"));
  }

  request.headers['Authorization'] = `Bearer ${token}`;
  return request;
})

export default instance;
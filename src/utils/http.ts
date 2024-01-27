import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL_DEV,
});

export const http = {
  get: function get<Response>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function post<Response, Request>(url: string, body?: Request) {
    return axios.post<Response>(url, body).then((res) => res.data);
  },
};

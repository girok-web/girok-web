import Axios from 'axios';

const axios = Axios.create();

const API_URL = 'http://localhost:8080/api/v1';

export const http = {
  get: function get<Response>(url: string) {
    return axios.get<Response>(`${API_URL}${url}`).then((res) => res.data);
  },
  post: function post<Response, Request>(url: string, body?: Request) {
    return axios.post<Response>(`${API_URL}${url}`, body).then((res) => res.data);
  },
};

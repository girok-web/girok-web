import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL_DEV,
});

export const http = {
  get: <Response = unknown>(url: GetApiPath, config?: AxiosRequestConfig) => {
    return axios.get<Response>(url, config).then((res) => res.data);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: <Request = any, Response = unknown>(url: PostApiPath, body?: Request, config?: AxiosRequestConfig) => {
    return axios.post<Response>(url, body, config).then((res) => res.data);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  patch: <Request = any, Response = unknown>(url: PatchApiPath, body?: Request, config?: AxiosRequestConfig) => {
    return axios.patch<Response>(url, body, config).then((res) => res.data);
  },
  delete: <Response = unknown>(url: DeleteApiPath, config?: AxiosRequestConfig) => {
    return axios.delete<Response>(url, config).then((res) => res.data);
  },
};

type GetApiPath = '/health-check' | '/auth/email/registered' | '/categories' | '/categories/id-by-path';

type PostApiPath =
  | '/sign-up'
  | '/login'
  | '/auth/verification-code'
  | '/auth/verification-code/check'
  | '/auth/password-reset/verify-code'
  | '/auth/password-reset/code'
  | '/categories'
  | '/categories/path';

type PatchApiPath = '/auth/reset-password' | `/categories${number}` | `/categories/${number}/parent`;

type DeleteApiPath = `/categories/${number}`;

import { http } from '../../../utils/http';

interface GetEmailVerifiedResponse {
  isRegistered: boolean;
}

export const getEmailVerified = ({ email }: { email: string }) => {
  return http.get<GetEmailVerifiedResponse>(`/auth/email/registered?email=${email}`);
};

export interface PostLoginRequest {
  email: string;
  password: string;
}

export interface PostLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const postLogin = ({ email, password }: PostLoginRequest) => {
  return http.post<PostLoginResponse, PostLoginRequest>('/auth/login', { email, password });
};

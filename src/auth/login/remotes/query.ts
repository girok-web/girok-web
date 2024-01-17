import { http } from '../../../utils/http';

interface GetEmailVerifiedResponse {
  is_registered: boolean;
}

export const getEmailVerified = ({ email }: { email: string }) => {
  return http
    .get<GetEmailVerifiedResponse>(`/auth/email/registered?email=${email}`)
    .then(({ is_registered }) => ({ isRegistered: is_registered }));
};

interface PostLoginRequest {
  email: string;
  password: string;
}

interface PostLoginResponse {
  access_token: string;
  refresh_token: string;
}

export const postLogin = ({ email, password }: PostLoginRequest) => {
  return http
    .post<PostLoginResponse, PostLoginRequest>('/auth/login', { email, password })
    .then(({ access_token, refresh_token }) => ({
      accessToken: access_token,
      refreshToken: refresh_token,
    }));
};

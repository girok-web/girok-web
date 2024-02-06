import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface PostLoginRequest {
  email: string;
  password: string;
}

interface PostLoginResponse {
  accessToken: string;
  refreshToken: string;
}

const postLogin = (requestBody: PostLoginRequest) => {
  return http.post<PostLoginRequest, PostLoginResponse>('/login', requestBody);
};

function useLogin() {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: PostLoginRequest) => postLogin(data),
  });
}

export default useLogin;

import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface SignupRequest {
  email: string;
  password: string;
  verificationCode: string;
}

const postSignup = (requestBody: SignupRequest) => {
  return http.post<SignupRequest>('/sign-up', requestBody);
};

function useSignup() {
  return useMutation({
    mutationKey: ['postSignup'],
    mutationFn: (data: SignupRequest) => postSignup(data),
  });
}

export default useSignup;

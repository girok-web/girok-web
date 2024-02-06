import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface SignupEmailVerificationCheckRequest {
  email: string;
  verificationCode: string;
}

const postEmailVerificationCheck = (requestBody: SignupEmailVerificationCheckRequest) => {
  return http.post<SignupEmailVerificationCheckRequest>('/auth/verification-code/check', requestBody);
};

function usePostEmailVerificationCheck() {
  return useMutation({
    mutationKey: ['postEmailVerificationCheck'],
    mutationFn: (data: SignupEmailVerificationCheckRequest) => postEmailVerificationCheck(data),
  });
}

export default usePostEmailVerificationCheck;

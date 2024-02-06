import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface SignupEmailVerificationRequest {
  email: string;
}

const postEmailVerification = (requestBody: SignupEmailVerificationRequest) => {
  return http.post<SignupEmailVerificationRequest>('/auth/verification-code', requestBody);
};

function usePostEmailVerification() {
  return useMutation({
    mutationKey: ['postEmailVerification'],
    mutationFn: (data: SignupEmailVerificationRequest) => postEmailVerification(data),
  });
}

export default usePostEmailVerification;

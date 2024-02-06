import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

interface ResetVerificationRequest {
  email: string;
}

const postResetVerification = (requestBody: ResetVerificationRequest) => {
  return http.post('/auth/password-reset/code', requestBody);
};

function usePostResetVerification() {
  return useMutation({
    mutationKey: ['postResetVerification'],
    mutationFn: (data: ResetVerificationRequest) => postResetVerification(data),
  });
}

export default usePostResetVerification;

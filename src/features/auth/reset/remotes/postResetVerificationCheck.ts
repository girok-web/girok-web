import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

interface ResetVerificationCheckRequest {
  email: string;
  verificationCode: string;
}

const postResetVerificationCheck = (requestBody: ResetVerificationCheckRequest) => {
  return http.post('/auth/password-reset/verify-code', requestBody);
};

function usePostResetVerificationCheck() {
  return useMutation({
    mutationKey: ['postResetVerificationCheck'],
    mutationFn: (data: ResetVerificationCheckRequest) => postResetVerificationCheck(data),
  });
}

export default usePostResetVerificationCheck;

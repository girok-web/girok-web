import { useMutation } from '@tanstack/react-query';
import { SignupRequest, postEmailVerificationCheck } from '../query';

function usePostEmailVerificationCheck() {
  return useMutation({
    mutationKey: ['postEmailVerificationCheck'],
    mutationFn: (data: Pick<SignupRequest, 'email' | 'verificationCode'>) => postEmailVerificationCheck(data),
  });
}

export default usePostEmailVerificationCheck;

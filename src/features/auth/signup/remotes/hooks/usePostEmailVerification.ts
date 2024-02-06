import { useMutation } from '@tanstack/react-query';
import { SignupRequest, postEmailVerification } from '../query';

function usePostEmailVerification() {
  return useMutation({
    mutationKey: ['postEmailVerification'],
    mutationFn: (data: Pick<SignupRequest, 'email'>) => postEmailVerification(data),
  });
}

export default usePostEmailVerification;

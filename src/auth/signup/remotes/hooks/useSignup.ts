import { useMutation } from '@tanstack/react-query';
import { SignupRequest, postSignup } from '../query';

function useSignup() {
  return useMutation({
    mutationKey: ['postSignup'],
    mutationFn: (data: SignupRequest) => postSignup(data),
  });
}

export default useSignup;

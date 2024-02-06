import { useMutation } from '@tanstack/react-query';
import { getEmailVerified } from '../remotes/query';

function useEmailVerified() {
  return useMutation({
    mutationKey: ['postEmailVerify'],
    mutationFn: (data: { email: string }) => getEmailVerified(data),
  });
}

export default useEmailVerified;

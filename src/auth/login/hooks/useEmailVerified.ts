import { useMutation } from '@tanstack/react-query';
import { getEmailVerified } from '../remotes/query';

function useEmailVerified() {
  const { mutate } = useMutation({
    mutationKey: ['postEmailVerify'],
    mutationFn: (data: { email: string }) => getEmailVerified(data),
  });

  return { verifyEmail: mutate };
}

export default useEmailVerified;

import { useMutation } from '@tanstack/react-query';
import { PostLoginRequest, getEmailVerified, postLogin } from '../remotes/query';

function useLogin() {
  const { mutate: verifyEmail } = useMutation({
    mutationKey: ['postEmailVerify'],
    mutationFn: (data: { email: string }) => getEmailVerified(data),
  });

  const { mutate: login } = useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: PostLoginRequest) => postLogin(data),
  });

  return { verifyEmail, login };
}

export default useLogin;

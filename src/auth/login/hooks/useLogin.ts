import { useMutation } from '@tanstack/react-query';
import { PostLoginRequest, postLogin } from '../remotes/query';

function useLogin() {
  const { mutate } = useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: PostLoginRequest) => postLogin(data),
  });

  return { login: mutate };
}

export default useLogin;

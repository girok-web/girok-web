import { useMutation } from '@tanstack/react-query';
import { PostLoginRequest, postLogin } from '../remotes/query';

function useLogin() {
  return useMutation({
    mutationKey: ['postLogin'],
    mutationFn: (data: PostLoginRequest) => postLogin(data),
  });
}

export default useLogin;

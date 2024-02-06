import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

interface GetEmailVerifiedResponse {
  isRegistered: boolean;
}

const getEmailVerified = ({ email }: { email: string }) => {
  return http.get<GetEmailVerifiedResponse>('/auth/email/registered', {
    params: { email },
  });
};

function useEmailVerified() {
  return useMutation({
    mutationKey: ['postEmailVerify'],
    mutationFn: (data: { email: string }) => getEmailVerified(data),
  });
}

export default useEmailVerified;

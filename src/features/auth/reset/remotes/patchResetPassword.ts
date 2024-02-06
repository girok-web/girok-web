import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  verificationCode: string;
}

const patchResetPassword = (requestBody: ResetPasswordRequest) => {
  return http.patch('/auth/reset-password', requestBody);
};

function usePatchResetPassword() {
  return useMutation({
    mutationKey: ['patchResetPassword'],
    mutationFn: (data: ResetPasswordRequest) => patchResetPassword(data),
  });
}

export default usePatchResetPassword;

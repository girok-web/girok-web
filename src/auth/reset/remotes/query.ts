import { useMutation } from '@tanstack/react-query';
import { http } from '../../../utils/http';

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  verificationCode: string;
}

export const postResetVerification = ({ email }: Pick<ResetPasswordRequest, 'email'>) => {
  return http.post('/auth/password-reset/code', { email });
};

export const postResetVerificationCheck = ({
  email,
  verificationCode,
}: Pick<ResetPasswordRequest, 'email' | 'verificationCode'>) => {
  return http.post('/auth/password-reset/verify-code', { email, verificationCode });
};

export const patchResetPassword = ({ email, newPassword, verificationCode }: ResetPasswordRequest) => {
  return http.patch('/auth/reset-password', { email, newPassword, verificationCode });
};

export const usePatchResetPassword = () => {
  return useMutation({
    mutationKey: ['patchResetPassword'],
    mutationFn: (data: ResetPasswordRequest) => patchResetPassword(data),
  });
};

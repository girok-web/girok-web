import { useMutation } from '@tanstack/react-query';
import { http } from '../../../../utils/http';

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
  verificationCode: string;
}

const postResetVerification = ({ email }: Pick<ResetPasswordRequest, 'email'>) => {
  return http.post('/auth/password-reset/code', { email });
};

export const usePostResetVerification = () => {
  return useMutation({
    mutationKey: ['postResetVerification'],
    mutationFn: (data: Pick<ResetPasswordRequest, 'email'>) => postResetVerification(data),
  });
};

const postResetVerificationCheck = ({
  email,
  verificationCode,
}: Pick<ResetPasswordRequest, 'email' | 'verificationCode'>) => {
  return http.post('/auth/password-reset/verify-code', { email, verificationCode });
};

export const usePostResetVerificationCheck = () => {
  return useMutation({
    mutationKey: ['postResetVerificationCheck'],
    mutationFn: (data: Pick<ResetPasswordRequest, 'email' | 'verificationCode'>) => postResetVerificationCheck(data),
  });
};

const patchResetPassword = ({ email, newPassword, verificationCode }: ResetPasswordRequest) => {
  return http.patch('/auth/reset-password', { email, newPassword, verificationCode });
};

export const usePatchResetPassword = () => {
  return useMutation({
    mutationKey: ['patchResetPassword'],
    mutationFn: (data: ResetPasswordRequest) => patchResetPassword(data),
  });
};

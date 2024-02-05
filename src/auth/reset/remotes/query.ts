import { http } from '../../../utils/http';

export interface ResetPasswordRequest {
  email: string;
  password: string;
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

export const patchResetPassword = ({ email, password, verificationCode }: ResetPasswordRequest) => {
  return http.patch('/auth/reset-password', { email, password, verificationCode });
};

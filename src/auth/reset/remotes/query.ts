import { http } from '../../../utils/http';

export const postResetVerification = ({ email }: { email: string }) => {
  return http.post('/password-reset/code', { email });
};

export const postResetVerificationCheck = ({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) => {
  return http.post('/auth/password-reset/verify-code', { email, verificationCode });
};

export const postResetPassword = ({
  email,
  password,
  verificationCode,
}: {
  email: string;
  password: string;
  verificationCode: string;
}) => {
  return http.post('/reset-password', { email, password, verificationCode });
};

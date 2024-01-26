import { http } from '../../../utils/http';

export const postEmailVerification = ({ email }: { email: string }) => {
  return http.post('/auth/verification-code', { email });
};

export const postEmailVerificationCheck = ({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) => {
  return http.post('/auth/verification-code/check', { email, verificationCode });
};

export const postSignup = ({
  email,
  password,
  verificationCode,
}: {
  email: string;
  password: string;
  verificationCode: string;
}) => {
  return http.post('/users', { email, password, verification_code: verificationCode });
};

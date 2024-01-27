import { http } from '../../../utils/http';

export const postEmailVerification = (requestBody: { email: string }) => {
  return http.post('/auth/verification-code', requestBody);
};

export const postEmailVerificationCheck = (requestBody: { email: string; verificationCode: string }) => {
  return http.post('/auth/verification-code/check', requestBody);
};

export const postSignup = (requestBody: { email: string; password: string; verificationCode: string }) => {
  return http.post('/sign-up', requestBody);
};

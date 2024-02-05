import { http } from '../../../utils/http';

export interface SignupRequest {
  email: string;
  password: string;
  verificationCode: string;
}

export const postEmailVerification = (requestBody: Pick<SignupRequest, 'email'>) => {
  return http.post<Pick<SignupRequest, 'email'>>('/auth/verification-code', requestBody);
};

export const postEmailVerificationCheck = (requestBody: Pick<SignupRequest, 'email' | 'verificationCode'>) => {
  return http.post<Pick<SignupRequest, 'email' | 'verificationCode'>>('/auth/verification-code/check', requestBody);
};

export const postSignup = (requestBody: SignupRequest) => {
  return http.post<SignupRequest>('/sign-up', requestBody);
};

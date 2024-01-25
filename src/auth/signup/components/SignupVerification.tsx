import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { typographyMap } from '../../../styles/typography';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification, postEmailVerificationCheck } from '../remotes/query';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';
import Addition from '../../Addition';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { SignupData } from '../../../pages/SignupPage';

interface FormFields {
  verificationCode: string;
}

interface SignupVerificationProps {
  signupData: SignupData;
  setSignupData: (key: keyof SignupData, value: SignupData[keyof SignupData]) => void;
  nextStep: () => void;
}

export default function SignupVerification({ signupData, setSignupData, nextStep }: SignupVerificationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const { email } = signupData;

  const submitVerificationCode: SubmitHandler<FormFields> = ({ verificationCode }) => {
    postEmailVerificationCheck({ email, verificationCode }).then(() => {
      setSignupData('verificationCode', verificationCode);
      nextStep();
    });
  };

  const submitVerificationCode: SubmitHandler<FormFields> = ({ verificationCode }) => {
    postEmailVerificationCheck({ email, verificationCode }).then(() => {
      setSignup((s) => ({ ...s, verificationCode }));
      navigate('/signup/password');
    });
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit(submitVerificationCode)}>
        <SignForm.Title name="Sign up" />
        <Spacing size={8} />
        <SignForm.Description content="Check your mailbox." />
        <Spacing size={32} />
        <InputField type="text" bottomText={errors.verificationCode?.message}>
          <SignForm.Input
            {...register('verificationCode', {
              required: true,
            })}
            placeholder="Verification code"
            hasError={!!errors.verificationCode}
          />
        </InputField>
        <Spacing size={56} />
        <SignForm.Button type="submit">Next</SignForm.Button>
        <Spacing size={24} />
        <button
          type="button"
          onClick={() => {
            postEmailVerification({ email });
          }}
          css={css([
            typographyMap.smallBody,
            {
              color: colorPalette.darkGray,
            },
          ])}
        >
          <img
            src={envelopeBlackIcon}
            css={css`
              margin-right: 8px;
            `}
          />
          Resend authentication number
        </button>
      </SignForm>

      <Spacing size={24} />

      <Addition>
        Already have an account? <Link to="/login/email">Sign in</Link>
      </Addition>
    </>
  );
}

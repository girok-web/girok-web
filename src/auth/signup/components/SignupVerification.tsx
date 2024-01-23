import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { typographyMap } from '../../../styles/typography';
import { colorPalette } from '../../../styles/colorPalette';
import { useSignup, useSignupDispatch } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification, postEmailVerificationCheck } from '../remotes/query';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';
import Addition from '../../Addition';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../shared/InputField';

interface FormFields {
  verificationCode: string;
}

export default function SignupVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const { email } = useSignup();
  const setSignup = useSignupDispatch();
  const navigate = useNavigate();

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

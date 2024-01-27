import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { typographyMap } from '../../../styles/typography';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification, postEmailVerificationCheck } from '../remotes/query';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';
import Addition from '../../Addition';
import { useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { SignupFields } from '../../../pages/SignupPage';
import { FormEvent } from 'react';

interface SignupVerificationProps {
  nextStep: () => void;
}

export default function SignupVerification({ nextStep }: SignupVerificationProps) {
  const {
    register,
    watch,
    getValues,
    formState: { errors },
  } = useFormContext<SignupFields>();

  const email = watch('email');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, verificationCode } = getValues();

    postEmailVerificationCheck({ email, verificationCode }).then(() => {
      nextStep();
    });
  };

  return (
    <>
      <SignForm onSubmit={onSubmit}>
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

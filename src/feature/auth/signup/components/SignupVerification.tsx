import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import envelopeBlackIcon from '../../../../assets/icons/envelope-black.svg';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import usePostEmailVerification from '../remotes/hooks/usePostEmailVerification';
import usePostEmailVerificationCheck from '../remotes/hooks/usePostEmailVerificationCheck';
import { useEffect } from 'react';
import AuthPromptLink from '../../AuthPromptLink';
import { SignupFields } from '../../../../pages/SignupPage';
import { Spacing } from '../../../../shared/Spacing';
import InputField from '../../../../shared/InputField';
import { typographyMap } from '../../../../styles/typography';
import { colorPalette } from '../../../../styles/colorPalette';

interface SignupVerificationProps {
  nextStep: () => void;
}

export default function SignupVerification({ nextStep }: SignupVerificationProps) {
  const {
    register,
    watch,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useFormContext<SignupFields>();

  const { mutate: postEmailVerification } = usePostEmailVerification();
  const { mutate: postEmailVerificationCheck } = usePostEmailVerificationCheck();

  const email = watch('email');

  const onSubmit: SubmitHandler<SignupFields> = ({ email, verificationCode }) => {
    postEmailVerificationCheck(
      { email, verificationCode },
      {
        onSuccess: () => nextStep(),
        onError: () => {
          setError('verificationCode', { message: 'Verification code does not match. Please check again.' });
        },
      },
    );
  };

  useEffect(() => {
    setFocus('verificationCode');
  }, [setFocus]);

  return (
    <>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignForm.Title name="Sign up" />
        <Spacing size={8} />
        <SignForm.Description content="Check your mailbox." />
        <Spacing size={32} />
        <InputField type="text" bottomText={errors.verificationCode?.message}>
          <SignForm.Input
            {...register('verificationCode', {
              required: {
                value: true,
                message: 'Enter certification code.',
              },
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

      <AuthPromptLink message="Already have an account?" linkText="Sign in" to="/login" />
    </>
  );
}

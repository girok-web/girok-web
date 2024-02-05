import { css } from '@emotion/react';
import { typographyMap } from '../../../styles/typography';
import SignForm from '../../SignForm';
import { colorPalette } from '../../../styles/colorPalette';
import { Spacing } from '../../../shared/Spacing';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { usePostResetVerification, usePostResetVerificationCheck } from '../remotes/query';
import { ResetFields } from '../../../pages/ResetPage';
import { useEffect } from 'react';
import { isAxiosError } from 'axios';

interface ResetVerificationProps {
  nextStep: () => void;
}

export default function ResetVerification({ nextStep }: ResetVerificationProps) {
  const {
    register,
    watch,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const email = watch('email');

  const { mutate: postResetVerification } = usePostResetVerification();
  const { mutate: postResetVerificationCheck } = usePostResetVerificationCheck();

  const submitVerificationCode: SubmitHandler<ResetFields> = ({ email, verificationCode }) => {
    postResetVerificationCheck(
      { email, verificationCode },
      {
        onSuccess: () => nextStep(),
        onError: (error) => {
          if (isAxiosError(error)) {
            if (error.response?.data.errorCode === 'INVALID_VERIFICATION_CODE') {
              setError('verificationCode', {
                type: '400',
                message: 'Verification code does not match. Please check again.',
              });
            }
          }
        },
      },
    );
  };

  useEffect(() => {
    setFocus('verificationCode');
  }, [setFocus]);

  return (
    <SignForm onSubmit={handleSubmit(submitVerificationCode)}>
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Check your mailbox." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.verificationCode?.message}>
        <SignForm.Input
          {...register('verificationCode', {
            required: 'Enter certification code.',
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
          postResetVerification({ email });
        }}
        css={css([typographyMap.smallBody, { color: colorPalette.darkGray }])}
      >
        <img
          src={envelopeBlackIcon}
          css={css({
            marginRight: 8,
          })}
        />
        Resend authentication number
      </button>
    </SignForm>
  );
}

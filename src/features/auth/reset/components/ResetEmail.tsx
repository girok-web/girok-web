import SignForm from '../../SignForm';
import { css } from '@emotion/react';
import envelopeWhiteIcon from '../../../../assets/icons/envelope-white.svg';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { isAxiosError } from 'axios';
import { ResetFields } from '../../../../pages/ResetPage';
import { Spacing } from '../../../../shared/Spacing';
import InputField from '../../../../shared/InputField';
import usePostResetVerification from '../remotes/postResetVerification';

interface ResetEmailProps {
  nextStep: () => void;
}

export default function ResetEmail({ nextStep }: ResetEmailProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const { mutate: postResetVerification } = usePostResetVerification();

  const submitEmail: SubmitHandler<ResetFields> = ({ email }) => {
    postResetVerification(
      { email },
      {
        onSuccess: () => nextStep(),
        onError: (error) => {
          if (isAxiosError(error)) {
            if (error.response?.data.errorCode === 'MEMBER_NOT_FOUND') {
              setError(
                'email',
                {
                  message: 'Member with the given email does not exist.',
                },
                { shouldFocus: true },
              );
            }
          }
        },
      },
    );
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <SignForm onSubmit={handleSubmit(submitEmail)}>
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.email?.message}>
        <SignForm.Input
          {...register('email', {
            required: 'Enter an email.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Not a valid email format. Please check again.',
            },
          })}
          placeholder="Email"
          hasError={!!errors.email}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button
        type="submit"
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <img
          src={envelopeWhiteIcon}
          css={css({
            marginRight: 8,
          })}
        />
        Send authentication number
      </SignForm.Button>
    </SignForm>
  );
}

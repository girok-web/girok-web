import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import { css } from '@emotion/react';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { usePostResetVerification } from '../remotes/query';
import { ResetFields } from '../../../pages/ResetPage';
import { useEffect } from 'react';

interface ResetEmailProps {
  nextStep: () => void;
}

export default function ResetEmail({ nextStep }: ResetEmailProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const { mutate: postResetVerification } = usePostResetVerification();

  const submitEmail: SubmitHandler<ResetFields> = ({ email }) => {
    postResetVerification(
      { email },
      {
        onSuccess: () => nextStep(),
        onError: (error) => alert(error),
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
      <InputField type="text">
        <SignForm.Input
          {...register('email', {
            required: true,
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

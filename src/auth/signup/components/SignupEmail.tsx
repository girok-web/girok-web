import SignForm from '../../SignForm';
import { SignupFields } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { css } from '@emotion/react';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import usePostEmailVerification from '../remotes/hooks/usePostEmailVerification';

interface SignupEmailProps {
  nextStep: () => void;
}

export default function SignupEmail({ nextStep }: SignupEmailProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SignupFields>();

  const { mutate: postEmailVerification } = usePostEmailVerification();

  const onSubmit: SubmitHandler<SignupFields> = ({ email }) => {
    postEmailVerification(
      { email },
      {
        onSuccess: () => nextStep(),
        onError: (error) => alert(error),
      },
    );
  };

  return (
    <SignForm onSubmit={handleSubmit(onSubmit)}>
      <SignForm.Title name="Sign up" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.email?.message}>
        <SignForm.Input
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email.',
            },
          })}
          placeholder="Email"
          hasError={!!errors.email}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button type="submit">
        <img
          src={envelopeWhiteIcon}
          css={css`
            margin-right: 8px;
          `}
        />
        <span>Send authentication number</span>
      </SignForm.Button>
    </SignForm>
  );
}

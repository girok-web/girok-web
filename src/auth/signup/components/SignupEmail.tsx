import SignForm from '../../SignForm';
import { SignupStepFields } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification } from '../remotes/query';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { css } from '@emotion/react';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { AxiosError } from 'axios';

interface SignupEmailProps {
  nextStep: () => void;
}

export default function SignupEmail({ nextStep }: SignupEmailProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SignupStepFields>();

  const onSubmit: SubmitHandler<SignupStepFields> = ({ emailStep: { email } }) => {
    postEmailVerification({ email })
      .then(() => {
        nextStep();
      })
      .catch((error: AxiosError<{ error_code: string; detail: string }>) => {
        alert(error);
      });
  };

  return (
    <SignForm onSubmit={handleSubmit(onSubmit)}>
      <SignForm.Title name="Sign up" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.emailStep?.email?.message}>
        <SignForm.Input
          {...register('emailStep.email', {
            required: {
              value: true,
              message: 'Please enter your email.',
            },
          })}
          placeholder="Email"
          hasError={!!errors.emailStep?.email}
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

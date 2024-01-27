import SignForm from '../../SignForm';
import { SignupFields } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification } from '../remotes/query';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { css } from '@emotion/react';
import InputField from '../../../shared/InputField';
import { useFormContext } from 'react-hook-form';
import { AxiosError } from 'axios';
import { FormEvent } from 'react';

interface SignupEmailProps {
  nextStep: () => void;
}

export default function SignupEmail({ nextStep }: SignupEmailProps) {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<SignupFields>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = getValues();

    postEmailVerification({ email })
      .then(() => {
        nextStep();
      })
      .catch((error: AxiosError<{ error_code: string; detail: string }>) => {
        alert(error);
      });
  };

  return (
    <SignForm onSubmit={onSubmit}>
      <SignForm.Title name="Sign up" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <InputField type="text" bottomText={errors.email?.message}>
        <SignForm.Input
          {...register('email', {
            required: true,
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

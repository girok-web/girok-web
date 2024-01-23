import { useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { useSignupDispatch } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification } from '../remotes/query';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { css } from '@emotion/react';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

interface FormFields {
  email: string;
}

export default function SignupEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const setSignup = useSignupDispatch();
  const navigate = useNavigate();

  const submitEmail: SubmitHandler<FormFields> = ({ email }) => {
    postEmailVerification({ email })
      .then(() => {
        setSignup((s) => ({ ...s, email }));
        navigate('/signup/verification');
      })
      .catch((error: AxiosError<{ error_code: string; detail: string }>) => {
        alert(error);
      });
  };

  return (
    <SignForm onSubmit={handleSubmit(submitEmail)}>
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

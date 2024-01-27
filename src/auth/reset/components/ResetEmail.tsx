import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import { ResetData } from '../../../pages/ResetPage';
import { css } from '@emotion/react';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { AxiosError } from 'axios';
import { postResetVerification } from '../remotes/query';

interface FormFields {
  email: string;
}

interface ResetEmailProps {
  setResetData: (key: keyof ResetData, value: ResetData[keyof ResetData]) => void;
  nextStep: () => void;
}

export default function ResetEmail({ setResetData, nextStep }: ResetEmailProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const submitEmail: SubmitHandler<FormFields> = ({ email }) => {
    postResetVerification({ email })
      .then(() => {
        setResetData('email', email);
        nextStep();
      })
      .catch((error: AxiosError<{ errorCode: string; detail: string }>) => {
        alert(`${error}, ${error.response?.data.errorCode}`);
      });
  };

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

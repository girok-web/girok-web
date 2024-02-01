import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { ResetFields } from '../../../pages/ResetPage';
import { ResetPasswordRequest } from '../remotes/query';
import { useEffect } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';

interface ResetPasswordProps {
  resetPassword: UseMutateFunction<unknown, Error, ResetPasswordRequest, unknown>;
  nextStep: () => void;
}

export default function ResetPassword({ resetPassword, nextStep }: ResetPasswordProps) {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const submitResetPassword: SubmitHandler<ResetFields> = async ({
    email,
    verificationCode,
    password: { newPassword },
  }) => {
    resetPassword(
      { email, newPassword, verificationCode },
      {
        onSuccess: () => nextStep(),
        onError: (error) => alert(error),
      },
    );
  };

  useEffect(() => {
    setFocus('password.newPassword');
  }, [setFocus]);

  return (
    <SignForm onSubmit={handleSubmit(submitResetPassword)}>
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Set your new password." />
      <Spacing size={32} />
      <InputField type="password">
        <SignForm.Input
          {...register('password.newPassword', {
            required: true,
          })}
          placeholder="Password"
          hasError={!!errors.password?.newPassword}
        />
      </InputField>
      <Spacing size={12} />
      <InputField type="password" bottomText={errors.password?.confirmPassword?.message}>
        <SignForm.Input
          {...register('password.confirmPassword', {
            validate: (confirmPassword, formValues) => {
              if (confirmPassword !== formValues.password.newPassword) {
                return 'The password does not match. Please check again.';
              }
              return true;
            },
          })}
          placeholder="Confirm password"
          hasError={!!errors.password?.confirmPassword}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button type="submit">Sign</SignForm.Button>
    </SignForm>
  );
}

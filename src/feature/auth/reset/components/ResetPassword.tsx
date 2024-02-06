import SignForm from '../../SignForm';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { ResetPasswordRequest } from '../remotes/query';
import { useEffect } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { ResetFields } from '../../../../pages/ResetPage';
import { Spacing } from '../../../../shared/Spacing';
import InputField from '../../../../shared/InputField';

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
      <SignForm.Description content="The password must contain at least 7 characters including 1 upper case, 1 lower case, and 1 special character(@, #, $, %, *, !)." />
      <Spacing size={32} />
      <InputField type="password">
        <SignForm.Input
          {...register('password.newPassword', {
            required: 'The password must be at least 7 characters long.',
            minLength: {
              value: 7,
              message: 'The password must be at least 7 characters long.',
            },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%*!]).+$/,
              message: 'The password must contain a mix of letters and at least one symbol.',
            },
          })}
          placeholder="Password"
          hasError={!!errors.password?.newPassword}
        />
      </InputField>
      <Spacing size={12} />
      <InputField
        type="password"
        bottomText={errors.password?.newPassword?.message || errors.password?.confirmPassword?.message}
      >
        <SignForm.Input
          {...register('password.confirmPassword', {
            validate: {
              matchConfirmPassword: (confirmPassword, formValues) => {
                if (confirmPassword !== formValues.password.newPassword) {
                  return 'The password does not match. Please check again.';
                }
              },
            },
          })}
          placeholder="Confirm password"
          hasError={!errors.password?.newPassword && !!errors.password?.confirmPassword}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button type="submit">Sign</SignForm.Button>
    </SignForm>
  );
}

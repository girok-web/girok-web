import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { ResetFields } from '../../../pages/ResetPage';
import { ResetPasswordRequest } from '../remotes/query';

interface ResetPasswordProps {
  resetPassword: (data: ResetPasswordRequest) => Promise<unknown>;
  nextStep: () => void;
}

export default function ResetPassword({ resetPassword, nextStep }: ResetPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ResetFields>();

  const submitResetPassword: SubmitHandler<ResetFields> = async ({
    email,
    verificationCode,
    password: { password },
  }) => {
    resetPassword({ email, password, verificationCode }).then(() => {
      nextStep();
    });
  };

  return (
    <SignForm onSubmit={handleSubmit(submitResetPassword)}>
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Set your new password." />
      <Spacing size={32} />
      <InputField type="password">
        <SignForm.Input
          {...register('password.password', {
            required: true,
          })}
          placeholder="Password"
          hasError={!!errors.password?.password}
        />
      </InputField>
      <Spacing size={12} />
      <InputField type="password" bottomText={errors.password?.confirmPassword?.message}>
        <SignForm.Input
          {...register('password.confirmPassword', {
            validate: (confirmPassword, formValues) => {
              if (confirmPassword !== formValues.password.password) {
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

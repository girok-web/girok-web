import SignForm from '../../SignForm';
import { ResetData } from '../../../pages/ResetPage';
import { Spacing } from '../../../shared/Spacing';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../../../shared/InputField';
import { postResetPassword } from '../remotes/query';

interface FormFields {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordProps {
  resetData: ResetData;
  nextStep: () => void;
}

export default function ResetPassword({ resetData, nextStep }: ResetPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const { email, verificationCode } = resetData;

  const submitResetPassword: SubmitHandler<FormFields> = async ({ password }) => {
    postResetPassword({ email, password, verificationCode }).then(() => {
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
          {...register('password', {
            required: true,
          })}
          placeholder="Password"
          hasError={!!errors.password}
        />
      </InputField>
      <Spacing size={12} />
      <InputField type="password" bottomText={errors.confirmPassword?.message}>
        <SignForm.Input
          {...register('confirmPassword', {
            validate: (confirmPassword, formValues) => {
              if (confirmPassword !== formValues.password) {
                return 'The password does not match. Please check again.';
              }
              return true;
            },
          })}
          placeholder="Confirm password"
          hasError={!!errors.confirmPassword}
        />
      </InputField>
      <Spacing size={56} />
      <SignForm.Button type="submit">Sign</SignForm.Button>
    </SignForm>
  );
}

import { Link } from 'react-router-dom';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import Addition from '../../Addition';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { SignupRequest } from '../remotes/query';
import { SignupFields } from '../../../pages/SignupPage';
import { UseMutateFunction } from '@tanstack/react-query';

interface SignupPasswordProps {
  signup: UseMutateFunction<unknown, Error, SignupRequest, unknown>;
  nextStep: () => void;
}

export default function SignupPassword({ signup, nextStep }: SignupPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SignupFields>();

  const onSubmit: SubmitHandler<SignupFields> = ({ email, verificationCode, password: { password } }) => {
    signup(
      { email, password, verificationCode },
      {
        onSuccess: () => nextStep(),
      },
    );
  };

  return (
    <>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignForm.Title name="Sign up" />
        <Spacing size={8} />
        <SignForm.Description content="Set your password." />
        <Spacing size={32} />
        <InputField type="password">
          <SignForm.Input
            {...register('password.password', {
              required: true,
            })}
            placeholder="Password"
            hasError={!!errors.password?.password?.message}
          />
        </InputField>
        <Spacing size={16} />

        <InputField type="password" bottomText={errors.password?.confirmPassword?.message}>
          <SignForm.Input
            {...register('password.confirmPassword', {
              validate: (confirmPassword, formValues) => {
                if (confirmPassword !== formValues.password?.password) {
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
        <SignForm.Button type="submit">Sign up</SignForm.Button>
      </SignForm>

      <Spacing size={24} />

      <Addition>
        Already have an account? <Link to="/login">Sign in</Link>
      </Addition>
    </>
  );
}

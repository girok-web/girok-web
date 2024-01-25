import { Link } from 'react-router-dom';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import Addition from '../../Addition';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupData } from '../../../pages/SignupPage';
import { postSignup } from '../remotes/query';

interface FormFields {
  password: string;
  confirmPassword: string;
}

interface SignupPasswordProps {
  signupData: SignupData;
  nextStep: () => void;
}

export default function SignupPassword({ signupData, nextStep }: SignupPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const { email, verificationCode } = signupData;

  const onSubmit: SubmitHandler<FormFields> = async ({ password }) => {
    postSignup({ email, password, verificationCode }).then(() => {
      nextStep();
    });
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
            {...register('password', {
              required: true,
            })}
            placeholder="Password"
            hasError={!!errors.password}
          />
        </InputField>
        <Spacing size={16} />

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
        <SignForm.Button type="submit">Sign up</SignForm.Button>
      </SignForm>

      <Spacing size={24} />

      <Addition>
        Already have an account? <Link to="/login">Sign in</Link>
      </Addition>
    </>
  );
}

import SignForm from '../../SignForm';
import { useEffect } from 'react';
import { Spacing } from '../../../shared/Spacing';
import AuthPromptLink from '../../AuthPromptLink';
import InputField from '../../../shared/InputField';
import useEmailVerified from '../hooks/useEmailVerified';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { LoginFields } from '../../../pages/LoginPage';
import KeepLoginCheckBox from './KeepLoginCheckBox';

interface LoginEmailProps {
  nextStep: () => void;
}

export default function LoginEmail({ nextStep }: LoginEmailProps) {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useFormContext<LoginFields>();
  const { mutate: verifyEmail } = useEmailVerified();

  const onSubmit: SubmitHandler<LoginFields> = ({ email }) => {
    verifyEmail(
      { email },
      {
        onSettled: (data) => {
          if (data?.isRegistered) {
            nextStep();
          } else {
            setError('email', { message: 'No matching emails found. Please check again.' });
          }
        },
      },
    );
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your email." />
        <Spacing size={32} />
        <InputField type="text" bottomText={errors.email?.message}>
          <SignForm.Input
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Not a valid email format. Please check again.',
              },
            })}
            placeholder="Email"
            hasError={!!errors.email?.message}
          />
        </InputField>
        <Spacing size={56} />
        <SignForm.Button type="submit">Next</SignForm.Button>
        <Spacing size={102} />
        <KeepLoginCheckBox />
      </SignForm>

      <Spacing size={24} />

      <AuthPromptLink message="No account?" linkText="Create one" to="/signup" />
    </>
  );
}

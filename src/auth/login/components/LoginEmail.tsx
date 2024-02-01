import SignForm from '../../SignForm';
import { useEffect, useState } from 'react';
import { Spacing } from '../../../shared/Spacing';
import { css } from '@emotion/react';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import AuthPromptLink from '../../AuthPromptLink';
import InputField from '../../../shared/InputField';
import useEmailVerified from '../hooks/useEmailVerified';
import { LoginFields } from '../../../pages/LoginPage';
import { SubmitHandler, useFormContext } from 'react-hook-form';

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

  const [checked, setChecked] = useState(false);

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
        <label
          css={css({
            display: 'flex',
            alignItems: 'center',
            height: 18,
            position: 'absolute',
            bottom: 48,
            paddingLeft: 20,
            cursor: 'pointer',
            background: checked ? `url(${checkboxOnIcon}) no-repeat` : `url(${checkboxOffIcon}) no-repeat`,
          })}
        >
          <input
            type="checkbox"
            css={css({
              display: 'none',
            })}
            checked={checked}
            onChange={() => setChecked((c) => !c)}
          />
          Keep sign in
        </label>
      </SignForm>

      <Spacing size={24} />

      <AuthPromptLink message="No account?" linkText="Create one" to="/signup" />
    </>
  );
}

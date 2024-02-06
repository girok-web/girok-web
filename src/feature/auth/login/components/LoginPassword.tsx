import { useEffect } from 'react';
import SignForm from '../../SignForm';
import AuthPromptLink from '../../AuthPromptLink';
import MoveToReset from './MoveToReset';
import { PostLoginRequest } from '../remotes/query';
import { UseMutateFunction } from '@tanstack/react-query';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import KeepLoginCheckBox from './KeepLoginCheckBox';
import { LoginFields } from '../../../../pages/LoginPage';
import { Spacing } from '../../../../shared/Spacing';
import InputField from '../../../../shared/InputField';

interface LoginPasswordProps {
  login: UseMutateFunction<{ accessToken: string; refreshToken: string }, Error, PostLoginRequest, unknown>;
}

export default function LoginPassword({ login }: LoginPasswordProps) {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = useFormContext<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = ({ email, password }) => {
    login(
      { email, password },
      {
        onSuccess: () => {
          alert('성공');
        },
        onError: () => {
          setError('password', { message: 'The password is invalid. Please check again.' });
        },
      },
    );
  };

  useEffect(() => {
    setFocus('password');
  }, [setFocus]);

  return (
    <>
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your password." />
        <Spacing size={32} />
        <InputField type="password" bottomText={errors.password?.message}>
          <SignForm.Input
            {...register('password', {
              required: true,
            })}
            placeholder="Password"
            hasError={!!errors.password?.message}
          />
        </InputField>
        <Spacing size={56} />
        <SignForm.Button type="submit">Next</SignForm.Button>
        <Spacing size={24} />
        <MoveToReset linkText="Did you forget your password?" />
        <Spacing size={61} />
        <KeepLoginCheckBox />
      </SignForm>

      <Spacing size={24} />

      <AuthPromptLink message="No account?" linkText="Create one" to="/signup" />
    </>
  );
}

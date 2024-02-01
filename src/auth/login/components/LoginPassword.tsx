import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import AuthPromptLink from '../../AuthPromptLink';
import MoveToReset from './MoveToReset';
import { PostLoginRequest } from '../remotes/query';
import { UseMutateFunction } from '@tanstack/react-query';
import InputField from '../../../shared/InputField';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { LoginFields } from '../../../pages/LoginPage';

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

  const [checked, setChecked] = useState(false);

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
        <Spacing size={62} />
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

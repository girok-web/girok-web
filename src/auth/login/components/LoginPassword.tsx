import { useState } from 'react';
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

interface LoginPasswordProps {
  loginFormData: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: UseMutateFunction<{ accessToken: string; refreshToken: string }, Error, PostLoginRequest, unknown>;
}

export default function LoginPassword({ loginFormData, onChange, login }: LoginPasswordProps) {
  const [helperText, setHelperText] = useState('');

  const [checked, setChecked] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(loginFormData, {
      onSuccess: () => {
        alert('성공');
      },
      onError: () => {
        setHelperText('The password is invalid. Please check again.');
      },
    });
  };

  return (
    <>
      <SignForm onSubmit={onSubmit}>
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your password." />
        <Spacing size={32} />
        <InputField type="password" bottomText={helperText}>
          <SignForm.Input
            name="password"
            placeholder="Password"
            value={loginFormData.password}
            onChange={onChange}
            hasError={Boolean(helperText)}
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

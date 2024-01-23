import SignForm from '../../SignForm';
import { useState } from 'react';
import { Spacing } from '../../../shared/Spacing';
import { css } from '@emotion/react';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import AuthPromptLink from '../../AuthPromptLink';
import InputField from '../../../shared/InputField';
import useEmailVerified from '../hooks/useEmailVerified';

interface LoginEmailProps {
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

export default function LoginEmail({ email, onChange, nextStep }: LoginEmailProps) {
  const { verifyEmail } = useEmailVerified();
  const [helperText, setHelperText] = useState('');

  const [checked, setChecked] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    verifyEmail(
      { email },
      {
        onSettled: (data) => {
          if (data?.isRegistered) {
            nextStep();
          } else {
            setHelperText('No matching emails found. Please check again.');
          }
        },
      },
    );
  };

  return (
    <>
      <SignForm onSubmit={onSubmit}>
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your email." />
        <Spacing size={32} />
        <InputField type="text" bottomText={helperText}>
          <SignForm.Input
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            hasError={Boolean(helperText)}
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

      <AuthPromptLink message="No account?" linkText="Create one" to="/signup/email" />
    </>
  );
}

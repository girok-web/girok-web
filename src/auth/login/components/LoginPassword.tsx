import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { typographyMap } from '../../../styles/typography';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import eyeOnIcon from '../../../assets/icons/eye-on.svg';
import eyeOffIcon from '../../../assets/icons/eye-off.svg';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import AuthPromptLink from '../../AuthPromptLink';

interface LoginPasswordProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: () => Promise<void>;
}

export default function LoginPassword({ password, onChange, login }: LoginPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [helperText, setHelperText] = useState('');

  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login().catch(() => {
      setHelperText('The password is invalid. Please check again.');
    });
  };

  return (
    <>
      <SignForm onSubmit={onSubmit}>
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your password." />
        <Spacing size={32} />
        <div css={{ width: '100%', position: 'relative' }}>
          <SignForm.Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={onChange}
            error={Boolean(helperText)}
            helperText={helperText}
          />
          {password.length > 0 && (
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              css={css({
                position: 'absolute',
                right: 0,
                top: '25%',
              })}
            >
              {showPassword ? <img src={eyeOnIcon} /> : <img src={eyeOffIcon} />}
            </button>
          )}
        </div>
        <Spacing size={56} />
        <SignForm.Button type="submit">Next</SignForm.Button>
        <button
          type="button"
          onClick={() => navigate('/reset/email')}
          css={css([typographyMap.smallBody, { marginTop: 24 }])}
        >
          Did you forget your password?
        </button>
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

      <AuthPromptLink message="No account?" linkText="Create one" to="/signup/email" />
    </>
  );
}

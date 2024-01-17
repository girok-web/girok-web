import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { useReset, useResetDispatch } from '../../../pages/ResetPage';
import { Spacing } from '../../../shared/Spacing';
import eyeOnIcon from '../../../assets/icons/eye-on.svg';
import eyeOffIcon from '../../../assets/icons/eye-off.svg';

export default function ResetPassword() {
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { email, password, verificationCode } = useReset();
  const setSignup = useResetDispatch();

  const navigate = useNavigate();

  const match = password === confirmPassword;

  return (
    <main
      css={css({
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      })}
    >
      <SignForm
        onSubmit={(e) => {
          e.preventDefault();

          if (password.length > 0 && match) {
            // postSignup({ email, password, verificationCode }).then(() => {
            navigate('/reset/complete');
            // });
          } else {
            if (confirmPasswordRef.current) {
              confirmPasswordRef.current.focus();
              setError(true);
              setHelperText('The password does not match. Please check again.');
            }
          }
        }}
      >
        <SignForm.Title name="Reset password" />
        <Spacing size={8} />
        <SignForm.Description content="Set your new password." />
        <Spacing size={32} />
        <div css={{ width: '100%', position: 'relative' }}>
          <SignForm.Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={({ currentTarget }) => setSignup((s) => ({ ...s, password: currentTarget.value }))}
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
        <Spacing size={12} />
        <div css={{ width: '100%', position: 'relative' }}>
          <SignForm.Input
            ref={confirmPasswordRef}
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={({ currentTarget }) => setConfirmPassword(currentTarget.value)}
            error={error}
            helperText={helperText}
          />
          {confirmPassword.length > 0 && (
            <button
              type="button"
              onClick={() => setShowConfirmPassword((s) => !s)}
              css={css({
                position: 'absolute',
                right: 0,
                top: '25%',
              })}
            >
              {showConfirmPassword ? <img src={eyeOnIcon} /> : <img src={eyeOffIcon} />}
            </button>
          )}
        </div>
        <Spacing size={56} />
        <SignForm.Button type="submit">Sign</SignForm.Button>
      </SignForm>
    </main>
  );
}

import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { useSignup, useSignupDispatch } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postSignup } from '../remotes/query';
import eyeOnIcon from '../../../assets/icons/eye-on.svg';
import eyeOffIcon from '../../../assets/icons/eye-off.svg';

export default function SignupPassword() {
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { email, password, verificationCode } = useSignup();
  const setSignup = useSignupDispatch();

  const navigate = useNavigate();

  const match = password === confirmPassword;

  return (
    <>
      <SignForm
        onSubmit={(e) => {
          e.preventDefault();

          if (password.length > 0 && match) {
            postSignup({ email, password, verificationCode }).then(() => {
              navigate('/signup/complete');
            });
          } else {
            if (confirmPasswordRef.current) {
              confirmPasswordRef.current.focus();
              setError(true);
              setHelperText('The password does not match. Please check again.');
            }
          }
        }}
      >
        <SignForm.Title name="Sign up" />
        <Spacing size={8} />
        <SignForm.Description content="Set your password." />
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
        <SignForm.Button type="submit">Sign up</SignForm.Button>
      </SignForm>

      <Spacing size={24} />

      <SignForm.Addition>
        Already have an account? <Link to="/login">Sign in</Link>
      </SignForm.Addition>
    </>
  );
}

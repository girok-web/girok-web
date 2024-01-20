import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import SignForm from '../../SignForm';
import { typographyMap } from '../../../styles/typography';
import { colorPalette } from '../../../styles/colorPalette';
import { useSignup, useSignupDispatch } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification, postEmailVerificationCheck } from '../remotes/query';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';

export default function SignupVerification() {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const { email, verificationCode } = useSignup();
  const setSignup = useSignupDispatch();

  const navigate = useNavigate();

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

          postEmailVerificationCheck({ email, verificationCode })
            .then(() => {
              navigate('/signup/password');
            })
            .catch(() => {
              setError(true);
              setHelperText('Verification code does not match. Please check again.');
            });
        }}
      >
        <SignForm.Title name="Sign up" />
        <Spacing size={8} />
        <SignForm.Description content="Check your mailbox." />
        <Spacing size={32} />
        <SignForm.Input
          maxLength={6}
          placeholder="Verification code"
          value={verificationCode}
          onChange={({ currentTarget }) =>
            setSignup((s) => ({ ...s, verificationCode: currentTarget.value.toUpperCase() }))
          }
          error={error}
          helperText={helperText}
        />
        <Spacing size={56} />
        <SignForm.Button type="submit">Next</SignForm.Button>
        <Spacing size={24} />
        <button
          type="button"
          onClick={() => {
            postEmailVerification({ email });
          }}
          css={css([
            typographyMap.smallBody,
            {
              color: colorPalette.darkGray,
            },
          ])}
        >
          <img
            src={envelopeBlackIcon}
            css={css({
              marginRight: 8,
            })}
          />
          Resend authentication number
        </button>
      </SignForm>
      <SignForm.Addition>
        Already have an account? <Link to="/login/email">Sign in</Link>
      </SignForm.Addition>
    </main>
  );
}

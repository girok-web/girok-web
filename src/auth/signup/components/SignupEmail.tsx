import { useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { useSignup, useSignupDispatch } from '../../../pages/SignupPage';
import { Spacing } from '../../../shared/Spacing';
import { postEmailVerification } from '../remotes/query';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';
import { css } from '@emotion/react';

export default function SingupEmail() {
  const { email } = useSignup();
  const setSignup = useSignupDispatch();
  const navigate = useNavigate();

  return (
    <SignForm
      onSubmit={(e) => {
        e.preventDefault();

        postEmailVerification({ email })
          .then(() => {
            navigate('/signup/verification');
          })
          .catch((error) => {
            alert(error);
          });
      }}
    >
      <SignForm.Title name="Sign up" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <SignForm.Input
        type="text"
        placeholder="Email"
        onChange={({ currentTarget }) => setSignup((s) => ({ ...s, email: currentTarget.value }))}
      />
      <Spacing size={56} />
      <SignForm.Button
        type="submit"
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <img
          src={envelopeWhiteIcon}
          css={css({
            marginRight: 8,
          })}
        />
        Send authentication number
      </SignForm.Button>
    </SignForm>
  );
}

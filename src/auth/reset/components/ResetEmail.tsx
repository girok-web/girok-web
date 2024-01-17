import { useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { Spacing } from '../../../shared/Spacing';
import { useReset, useResetDispatch } from '../../../pages/ResetPage';
import { css } from '@emotion/react';
import envelopeWhiteIcon from '../../../assets/icons/envelope-white.svg';

export default function ResetEmail() {
  const { email } = useReset();
  const setReset = useResetDispatch();

  const navigate = useNavigate();

  return (
    <SignForm
      onSubmit={(e) => {
        e.preventDefault();

        navigate('/reset/verification');
      }}
    >
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Enter your Email. We will send you verification code." />
      <Spacing size={32} />
      <SignForm.Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={({ currentTarget }) => setReset((r) => ({ ...r, email: currentTarget.value }))}
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

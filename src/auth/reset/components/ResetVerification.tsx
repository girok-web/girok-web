import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { typography } from '../../../styles/typography';
import SignForm from '../../SignForm';
import { useReset, useResetDispatch } from '../../../pages/ResetPage';
import { color } from '../../../styles/color';
import { Spacing } from '../../../shared/Spacing';
import envelopeBlackIcon from '../../../assets/icons/envelope-black.svg';

export default function ResetVerification() {
  const { verificationCode } = useReset();
  const setReset = useResetDispatch();

  const navigate = useNavigate();

  return (
    <SignForm
      onSubmit={(e) => {
        e.preventDefault();

        navigate('/reset/password');
      }}
    >
      <SignForm.Title name="Reset password" />
      <Spacing size={8} />
      <SignForm.Description content="Check your mailbox." />
      <Spacing size={32} />
      <SignForm.Input
        type="text"
        placeholder="Verification code"
        value={verificationCode}
        onChange={({ currentTarget }) => setReset((r) => ({ ...r, verificationCode: currentTarget.value }))}
      />
      <Spacing size={56} />
      <SignForm.Button type="submit">Next</SignForm.Button>
      <Spacing size={24} />
      <button
        type="button"
        onClick={() => {
          // postEmailVerification({ email });
        }}
        css={css([typography.smallBody, { color: color.darkGray }])}
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
  );
}

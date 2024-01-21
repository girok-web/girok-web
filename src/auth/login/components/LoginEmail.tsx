import { Link, useNavigate } from 'react-router-dom';
import SignForm from '../../SignForm';
import { useLogin, useLoginDispatch } from '../../../pages/LoginPage';
import { getEmailVerified } from '../remotes/query';
import { useState } from 'react';
import { Spacing } from '../../../shared/Spacing';
import { css } from '@emotion/react';
import checkboxOnIcon from '../../../assets/icons/checkbox-on.svg';
import checkboxOffIcon from '../../../assets/icons/checkbox-off.svg';
import Addition from '../../Addition';

export default function LoginEmail() {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const [checked, setChecked] = useState(false);

  const { email } = useLogin();
  const setLogin = useLoginDispatch();
  const navigate = useNavigate();

  return (
    <>
      <SignForm
        onSubmit={(e) => {
          e.preventDefault();

          getEmailVerified({ email }).then(({ isRegistered }) => {
            if (isRegistered) {
              navigate('/login/password');
            } else {
              setError(true);
              setHelperText('No matching emails found. Please check again.');
            }
          });
        }}
      >
        <SignForm.Title name="Sign in" />
        <Spacing size={8} />
        <SignForm.Description content="Enter your email." />
        <Spacing size={32} />
        <SignForm.Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={({ currentTarget }) => setLogin((l) => ({ ...l, email: currentTarget.value }))}
          error={error}
          helperText={helperText}
        />
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

      <Addition>
        No account? <Link to="/signup/email">Create one</Link>
      </Addition>
    </>
  );
}

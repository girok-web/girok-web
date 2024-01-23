import React, { useState } from 'react';
import LoginEmail from '../auth/login/components/LoginEmail';
import LoginPassword from '../auth/login/components/LoginPassword';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import useLogin from '../auth/login/hooks/useLogin';

export default function LoginPage() {
  const [Funnel, setStep] = useFunnel(['email', 'password'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });
  const { login } = useLogin();

  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  return (
    <Funnel>
      <Funnel.Step name="email">
        <LoginEmail email={loginFormData.email} onChange={handleChangeInput} nextStep={() => setStep('password')} />
      </Funnel.Step>

      <Funnel.Step name="password">
        <LoginPassword loginFormData={loginFormData} onChange={handleChangeInput} login={login} />
      </Funnel.Step>
    </Funnel>
  );
}

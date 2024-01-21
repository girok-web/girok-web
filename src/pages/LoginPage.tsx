import React, { useState } from 'react';
import LoginEmail from '../auth/login/components/LoginEmail';
import LoginPassword from '../auth/login/components/LoginPassword';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import { postLogin } from '../auth/login/remotes/query';

export default function LoginPage() {
  const [Funnel, setStep] = useFunnel(['email', 'password'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const login = () => {
    return postLogin({ email: loginFormData.email, password: loginFormData.password }).then((data) => {
      alert(JSON.stringify(data.userInfo));
    });
  };

  return (
    <Funnel>
      <Funnel.Step name="email">
        <LoginEmail email={loginFormData.email} onChange={handleChangeInput} nextStep={() => setStep('password')} />
      </Funnel.Step>

      <Funnel.Step name="password">
        <LoginPassword password={loginFormData.email} onChange={handleChangeInput} login={login} />
      </Funnel.Step>
    </Funnel>
  );
}

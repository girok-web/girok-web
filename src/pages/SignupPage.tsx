import { useState } from 'react';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import SignupEmail from '../auth/signup/components/SignupEmail';
import SignupVerification from '../auth/signup/components/SignupVerification';
import SignupPassword from '../auth/signup/components/SignupPassword';
import SignupComplete from '../auth/signup/components/SignupComplete';

export interface SignupData {
  email: string;
  verificationCode: string;
}

export default function SignupPage() {
  const [Funnel, setStep] = useFunnel(['email', 'verification', 'password', 'complete'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });

  const [signupData, _setSignupData] = useState<SignupData>({
    email: '',
    verificationCode: '',
  });

  const setSignupData = (key: keyof SignupData, value: SignupData[keyof SignupData]) => {
    _setSignupData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Funnel>
      <Funnel.Step name="email">
        <SignupEmail setSignupData={setSignupData} nextStep={() => setStep('verification')} />
      </Funnel.Step>

      <Funnel.Step name="verification">
        <SignupVerification
          signupData={signupData}
          setSignupData={setSignupData}
          nextStep={() => setStep('password')}
        />
      </Funnel.Step>

      <Funnel.Step name="password">
        <SignupPassword signupData={signupData} nextStep={() => setStep('complete')} />
      </Funnel.Step>

      <Funnel.Step name="complete">
        <SignupComplete />
      </Funnel.Step>
    </Funnel>
  );
}

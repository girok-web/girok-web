import { useState } from 'react';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import ResetEmail from '../auth/reset/components/ResetEmail';
import ResetVerification from '../auth/reset/components/ResetVerification';
import ResetPassword from '../auth/reset/components/ResetPassword';
import ResetComplete from '../auth/reset/components/ResetComplete';

export interface ResetData {
  email: string;
  verificationCode: string;
}

export default function ResetPage() {
  const [Funnel, setStep] = useFunnel(['email', 'verification', 'password', 'complete'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });

  const [resetData, _setResetData] = useState<ResetData>({
    email: '',
    verificationCode: '',
  });

  const setResetData = (key: keyof ResetData, value: ResetData[keyof ResetData]) => {
    _setResetData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Funnel>
      <Funnel.Step name="email">
        <ResetEmail setResetData={setResetData} nextStep={() => setStep('verification')} />
      </Funnel.Step>

      <Funnel.Step name="verification">
        <ResetVerification resetData={resetData} setResetData={setResetData} nextStep={() => setStep('password')} />
      </Funnel.Step>

      <Funnel.Step name="password">
        <ResetPassword resetData={resetData} nextStep={() => setStep('complete')} />
      </Funnel.Step>

      <Funnel.Step name="complete">
        <ResetComplete />
      </Funnel.Step>
    </Funnel>
  );
}

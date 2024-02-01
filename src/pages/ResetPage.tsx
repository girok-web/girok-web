import { useFunnel } from '../hooks/use-funnel/useFunnel';
import ResetEmail from '../auth/reset/components/ResetEmail';
import ResetVerification from '../auth/reset/components/ResetVerification';
import ResetPassword from '../auth/reset/components/ResetPassword';
import ResetComplete from '../auth/reset/components/ResetComplete';
import { FormProvider, useForm } from 'react-hook-form';
import { ResetPasswordRequest, patchResetPassword } from '../auth/reset/remotes/query';

export interface ResetFields {
  email: string;
  verificationCode: string;
  password: {
    newPassword: string;
    confirmPassword: string;
  };
}

export default function ResetPage() {
  const [Funnel, setStep] = useFunnel(['email', 'verification', 'password', 'complete'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });

  const methods = useForm<ResetFields>();

  const resetPassword = (data: ResetPasswordRequest) => {
    return patchResetPassword(data);
  };

  return (
    <FormProvider {...methods}>
      <Funnel>
        <Funnel.Step name="email">
          <ResetEmail nextStep={() => setStep('verification')} />
        </Funnel.Step>

        <Funnel.Step name="verification">
          <ResetVerification nextStep={() => setStep('password')} />
        </Funnel.Step>

        <Funnel.Step name="password">
          <ResetPassword resetPassword={resetPassword} nextStep={() => setStep('complete')} />
        </Funnel.Step>

        <Funnel.Step name="complete">
          <ResetComplete />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  );
}

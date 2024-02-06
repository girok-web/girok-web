import ResetComplete from '../features/auth/reset/components/ResetComplete';
import ResetEmail from '../features/auth/reset/components/ResetEmail';
import ResetPassword from '../features/auth/reset/components/ResetPassword';
import ResetVerification from '../features/auth/reset/components/ResetVerification';
import usePatchResetPassword from '../features/auth/reset/remotes/patchResetPassword';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import { FormProvider, useForm } from 'react-hook-form';

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

  const methods = useForm<ResetFields>({
    reValidateMode: 'onSubmit',
  });

  const { mutate: resetPassword } = usePatchResetPassword();

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

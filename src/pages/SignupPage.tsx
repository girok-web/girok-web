import SignupComplete from '../features/auth/signup/components/SignupComplete';
import SignupEmail from '../features/auth/signup/components/SignupEmail';
import SignupPassword from '../features/auth/signup/components/SignupPassword';
import SignupVerification from '../features/auth/signup/components/SignupVerification';
import useSignup from '../features/auth/signup/remotes/hooks/useSignup';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import { FormProvider, useForm } from 'react-hook-form';

export interface SignupFields {
  email: string;
  verificationCode: string;
  password: {
    password: string;
    confirmPassword: string;
  };
}

export default function SignupPage() {
  const [Funnel, setStep] = useFunnel(['email', 'verification', 'password', 'complete'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });

  const methods = useForm<SignupFields>({
    reValidateMode: 'onSubmit',
  });

  const { mutate: signup } = useSignup();

  return (
    <FormProvider {...methods}>
      <Funnel>
        <Funnel.Step name="email">
          <SignupEmail nextStep={() => setStep('verification')} />
        </Funnel.Step>

        <Funnel.Step name="verification">
          <SignupVerification nextStep={() => setStep('password')} />
        </Funnel.Step>

        <Funnel.Step name="password">
          <SignupPassword signup={signup} nextStep={() => setStep('complete')} />
        </Funnel.Step>

        <Funnel.Step name="complete">
          <SignupComplete />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  );
}

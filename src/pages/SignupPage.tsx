import { useFunnel } from '../hooks/use-funnel/useFunnel';
import SignupEmail from '../auth/signup/components/SignupEmail';
import SignupVerification from '../auth/signup/components/SignupVerification';
import SignupPassword from '../auth/signup/components/SignupPassword';
import SignupComplete from '../auth/signup/components/SignupComplete';
import { FormProvider, useForm } from 'react-hook-form';
import { SignupRequest, postSignup } from '../auth/signup/remotes/query';

export interface SignupStepFields {
  emailStep: {
    email: string;
  };
  verificationStep: {
    verificationCode: string;
  };
  passwordStep: {
    password: string;
    confirmPassword: string;
  };
}

export default function SignupPage() {
  const [Funnel, setStep] = useFunnel(['email', 'verification', 'password', 'complete'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });

  const methods = useForm<SignupStepFields>();

  const signup = (data: SignupRequest) => {
    return postSignup(data);
  };

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

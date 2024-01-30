import LoginEmail from '../auth/login/components/LoginEmail';
import LoginPassword from '../auth/login/components/LoginPassword';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import useLogin from '../auth/login/hooks/useLogin';
import { FormProvider, useForm } from 'react-hook-form';

export interface LoginFields {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [Funnel, setStep] = useFunnel(['email', 'password'] as const, {
    initialStep: 'email',
    stepQueryKey: 'step',
  });
  const { mutate: login } = useLogin();

  const methods = useForm<LoginFields>({
    reValidateMode: 'onSubmit',
  });

  return (
    <FormProvider {...methods}>
      <Funnel>
        <Funnel.Step name="email">
          <LoginEmail nextStep={() => setStep('password')} />
        </Funnel.Step>

        <Funnel.Step name="password">
          <LoginPassword login={login} />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  );
}

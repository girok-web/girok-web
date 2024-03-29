import LoginEmail from '../features/auth/login/components/LoginEmail';
import LoginPassword from '../features/auth/login/components/LoginPassword';
import useLogin from '../features/auth/login/remotes/postLogin';
import { useFunnel } from '../hooks/use-funnel/useFunnel';
import { FormProvider, useForm } from 'react-hook-form';

export interface LoginFields {
  email: string;
  password: string;

  keepLogin: boolean;
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

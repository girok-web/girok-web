import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

type SignupInfo = {
  email: string;
  verificationCode: string;
  password: string;
};

const SignupContext = createContext<SignupInfo | null>(null);
const SignupDispatchContext = createContext<Dispatch<SetStateAction<SignupInfo>> | null>(null);

export const useSignup = () => {
  const signup = useContext(SignupContext);

  if (signup === null) {
    throw new Error('SignupContext를 Provider로 감싸지 않았습니다.');
  }

  return signup;
};

export const useSignupDispatch = () => {
  const loginDispatch = useContext(SignupDispatchContext);

  if (loginDispatch === null) {
    throw new Error('SignupDispatchContext를 Provider로 감싸지 않았습니다.');
  }

  return loginDispatch;
};

export default function SignupPage() {
  const [signup, setLogin] = useState<SignupInfo>({ email: '', password: '', verificationCode: '' });

  return (
    <SignupContext.Provider value={signup}>
      <SignupDispatchContext.Provider value={setLogin}>
        <Outlet />
      </SignupDispatchContext.Provider>
    </SignupContext.Provider>
  );
}

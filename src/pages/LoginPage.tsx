import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

type LoginInfo = {
  email: string;
  password: string;
};

const LoginContext = createContext<LoginInfo | null>(null);
const LoginDispatchContext = createContext<Dispatch<SetStateAction<LoginInfo>> | null>(null);

export const useLogin = () => {
  const login = useContext(LoginContext);

  if (login === null) {
    throw new Error('LoginContext를 Provider로 감싸지 않았습니다.');
  }

  return login;
};

export const useLoginDispatch = () => {
  const loginDispatch = useContext(LoginDispatchContext);

  if (loginDispatch === null) {
    throw new Error('LoginDispatchContext Provider로 감싸지 않았습니다.');
  }

  return loginDispatch;
};

export default function LoginPage() {
  const [login, setLogin] = useState<LoginInfo>({ email: '', password: '' });

  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={setLogin}>
        <Outlet />
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

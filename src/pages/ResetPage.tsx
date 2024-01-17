import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

type ResetInfo = {
  email: string;
  verificationCode: string;
  password: string;
};

const ResetContext = createContext<ResetInfo | null>(null);
const ResetDispatchContext = createContext<Dispatch<SetStateAction<ResetInfo>> | null>(null);

export const useReset = () => {
  const reset = useContext(ResetContext);

  if (reset === null) {
    throw new Error('ResetContext를 Provider로 감싸지 않았습니다.');
  }

  return reset;
};

export const useResetDispatch = () => {
  const resetDispatch = useContext(ResetDispatchContext);

  if (resetDispatch === null) {
    throw new Error('ResetDispatchContext를 Provider로 감싸지 않았습니다.');
  }

  return resetDispatch;
};

export default function ResetPage() {
  const [reset, setReset] = useState<ResetInfo>({ email: '', password: '', verificationCode: '' });

  return (
    <ResetContext.Provider value={reset}>
      <ResetDispatchContext.Provider value={setReset}>
        <Outlet />
      </ResetDispatchContext.Provider>
    </ResetContext.Provider>
  );
}

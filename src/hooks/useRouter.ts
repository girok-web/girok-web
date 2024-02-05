import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useRouter() {
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RouterPath) {
        navigate({ pathname: path });
      },
    };
  }, [navigate]);
}

export type RouterPath = '/' | '/login' | '/signup' | '/reset';

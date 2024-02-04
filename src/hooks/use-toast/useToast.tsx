import { useOverlay } from '../use-overlay/useOverlay';
import { useCallback, useRef } from 'react';
import { ANIMATION_DURATION, TOAST_DURATION } from './constants';
import Toast from './Toast';

interface OpenToastOptions {
  message: string;
  width?: 'long' | 'short';
}

function useToast() {
  const overlay = useOverlay({
    exitOnUnmount: false,
  });

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClose = useCallback(() => {
    overlay.close();

    exitTimeoutRef.current = setTimeout(overlay.exit, ANIMATION_DURATION);
  }, [overlay]);

  const initTimeout = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
    }

    if (exitTimeoutRef.current !== null) {
      clearTimeout(exitTimeoutRef.current);
    }
  }, []);

  const openToast = ({ message, width = 'short' }: OpenToastOptions) => {
    // MEMO: 이전에 설정된 타임아웃을 초기화하여 중복 실행을 방지한다
    initTimeout();

    closeTimeoutRef.current = setTimeout(handleClose, TOAST_DURATION);

    return overlay.open(({ isOpen }) => <Toast message={message} width={width} isOpen={isOpen} close={handleClose} />);
  };

  return { openToast };
}

export default useToast;

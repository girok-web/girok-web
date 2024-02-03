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
    // exit 되기 전인 0.3초 안에 다시 openToast가 호출되면 타이머에 의해 실행 될 exit 함수에 의해 즉시 언마운트된다
    // 따라서 exit을 호출하기 전 다시 Toast를 렌더링했다면 exit을 취소해야 한다
    exitTimeoutRef.current = setTimeout(overlay.exit, ANIMATION_DURATION);
  }, [overlay]);

  const setCloseTimeout = useCallback((closeFn: () => void, duration: number) => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(closeFn, duration);
  }, []);

  const openToast = ({ message, width = 'short' }: OpenToastOptions) => {
    // TODO: 페어 프로그래밍으로 문제 원인 찾기: overlay.open의 콜백함수 내부에 작성하면 기대와 같이 동작하지 않는다
    if (exitTimeoutRef.current !== null) {
      clearTimeout(exitTimeoutRef.current);
    }

    setCloseTimeout(handleClose, TOAST_DURATION);

    return overlay.open(({ isOpen }) => {
      return (
        <Toast
          message={message}
          width={width}
          isOpening={isOpen === true}
          isClosing={isOpen === false}
          close={handleClose}
        />
      );
    });
  };

  return { openToast };
}

export default useToast;

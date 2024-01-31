import { useOverlay } from '../use-overlay/useOverlay';
import { useEffect, useRef, useState } from 'react';
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

  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const exitAnimationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openToast = ({ message, width = 'short' }: OpenToastOptions) => {
    return overlay.open(({ isOpen, close, exit }) => {
      const handleClose = () => {
        close();
        // exit 되기 전인 0.3초 안에 다시 openToast가 호출되면 타이머에 의해 실행 될 exit 함수에 의해 즉시 언마운트된다
        // 따라서 exit을 호출하기 전 다시 Toast를 렌더링했다면 exit을 취소해야 한다
        exitAnimationTimeoutRef.current = setTimeout(exit, ANIMATION_DURATION);
      };

      if (exitTimeoutRef.current !== null) {
        clearTimeout(exitTimeoutRef.current);
      }

      if (isOpen === true) {
        exitTimeoutRef.current = setTimeout(handleClose, TOAST_DURATION);
      }

      return (function ToastElement() {
        const [isRendered, setIsRendered] = useState(false);

        useEffect(() => {
          setIsRendered(true);

          if (exitAnimationTimeoutRef.current !== null) {
            clearTimeout(exitAnimationTimeoutRef.current);
          }
        }, []);

        return (
          <Toast
            message={message}
            width={width}
            isOpening={isOpen === true}
            isClosing={isRendered && isOpen === false}
            close={handleClose}
          />
        );
      })();
    });
  };

  return { openToast };
}

export default useToast;

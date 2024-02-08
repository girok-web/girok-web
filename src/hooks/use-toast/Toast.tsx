import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import { ANIMATION_DURATION } from './constants';
import closeIcon from '../../assets/icons/close.svg';
import { useEffect, useState } from 'react';
import Text from '../../components/Text';

interface ToastProps {
  message: string;
  width: 'long' | 'short';
  isOpen: boolean;
  close: () => void;
}

function Toast({ message, width, isOpen, close }: ToastProps) {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  // MEMO: isOpen의 Default 값은 false이기 때문에 fadeUp 애니메이션 실행 전 깜빡임이 발생한다
  // 따라서 첫 렌더링 시에는 null을 반환하여 Toast 컴포넌트를 그리지 않는다
  return isFirstRender ? null : (
    <ToastContainer width={width} isOpening={isOpen} isClosing={!isOpen}>
      <Text typography="smallBody" color="white">
        {message}
      </Text>
      <button onClick={close}>
        <img src={closeIcon} alt="close" />
      </button>
    </ToastContainer>
  );
}

const ToastContainer = styled.div<{ width: string; isClosing: boolean; isOpening: boolean }>`
  position: fixed;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 48px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${({ width }) => (width === 'long' ? '420px' : '344px')};
  height: 48px;
  border-radius: 4px;
  padding: 4px 8px 4px 16px;

  background-color: ${colorPalette.gray6};

  ${({ isOpening }) =>
    isOpening &&
    css`
      animation: ${fadeUp} ${ANIMATION_DURATION}ms forwards;
    `}
  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${fadeOut} ${ANIMATION_DURATION}ms forwards;
    `}
`;

const fadeUp = keyframes`
  0% {
    transform: translate(50%, 48px);
    opacity: 0;
  }
  20% {
    transform: translate(50%, -10px);
    opacity: 1;
  }
  40% {
    transform: translate(50%, 5px);
  }
  60% {
    transform: translate(50%, -5px);
  }
  80% {
    transform: translate(50%, 2px);
  }
  100% {
    transform: translate(50%, 0);
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translate(50%, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(50%, -10px) scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: translate(50%, 0) scale(0.95);
    opacity: 0;
  }
`;

export default Toast;

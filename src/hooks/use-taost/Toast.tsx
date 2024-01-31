import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import { ANIMATION_DURATION } from './constants';
import Text from '../../shared/Text';
import closeIcon from '../../assets/icons/close.svg';

interface ToastProps {
  message: string;
  width: 'long' | 'short';
  isOpening: boolean;
  isClosing: boolean;
  close: () => void;
}

function Toast({ message, width, isOpening, isClosing, close }: ToastProps) {
  return (
    <ToastContainer width={width} isOpening={isOpening} isClosing={isClosing}>
      <Text typography="smallBody" color="white">
        {message}
      </Text>
      <button style={{ color: 'white' }} onClick={close}>
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
  }
  70% {
    transform: translate(50%, 0);
  }
  85%{
    transform: translate(50%, 6px);
  }
  100%{
    transform: translate(50%, 0);
  }
`;

const fadeOut = keyframes`
  from {
    transform: translate(50%, 0);
    opacity: 1;
  }

  to {
    transform: translate(50%, 0);
    opacity: 0;
  }
`;

export default Toast;

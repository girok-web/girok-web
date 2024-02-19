import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface FlexProps {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

export default Flex;

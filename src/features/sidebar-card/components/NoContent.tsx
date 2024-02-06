import styled from '@emotion/styled';
import Text from '../../../components/Text';
import { css } from '@emotion/react';
import Icon from '../../../components/Icon';
import Flex from '../../../components/Flex';

interface NoContentProps {
  onClick: () => void;
}

function NoContent({ onClick }: NoContentProps) {
  return (
    <Container as="button" direction="column" justify="center" align="center" onClick={onClick}>
      <Text typography="smallBody" color="gray3">
        No event
      </Text>
      <Text
        typography="smallBody"
        color="gray3"
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Icon
          name="weak-plus"
          css={css`
            margin-right: 4px;
          `}
        />{' '}
        Add new
      </Text>
    </Container>
  );
}

const Container = styled(Flex)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  gap: 8px;

  width: 80%;
  height: 50%;
`;

export default NoContent;

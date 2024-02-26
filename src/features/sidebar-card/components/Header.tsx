import Text from '../../../components/Text';
import Icon from '../../../components/Icon';
import Flex from '../../../components/Flex';
import styled from '@emotion/styled';

function Header() {
  return (
    <Container justify="space-between" align="center">
      <Text typography="body1">girok()</Text>
      <Icon name="sidebar-left" />
    </Container>
  );
}

const Container = styled(Flex)`
  position: sticky;
  top: 0;
  background-color: inherit;
  z-index: 50;

  padding: 17px 20px 0 20px;
`;

export default Header;

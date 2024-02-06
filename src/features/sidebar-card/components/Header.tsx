import Text from '../../../components/Text';
import Icon from '../../../components/Icon';
import Flex from '../../../components/Flex';

function Header() {
  return (
    <Flex justify="space-between" align="center">
      <Text typography="body1">girok()</Text>
      <Icon name="sidebar-left" />
    </Flex>
  );
}

export default Header;

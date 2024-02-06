import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import { Spacing } from '../../components/Spacing';

function SidebarCard() {
  return (
    <Container>
      <Header>
        <Text typography="body1">girok()</Text>
        <Icon name="sidebar-left" />
      </Header>
      <Spacing size={18} />
      <Cards>
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  width: 344px;
  min-height: 100vh;

  padding: 17px 20px;

  background-color: ${colorPalette.grayFC};
  border-radius: 0 36px 0 0;

  box-shadow:
    1px 1px 5px 0px #00000012,
    0px 4px 27px 0px #00000012;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

const Card = styled.div`
  width: 100%;
  min-height: 280px;

  padding: 24px 20px;

  background-color: ${colorPalette.white};

  border-radius: 16px;
  border: 1.5px solid ${colorPalette.gray1};
`;

export default SidebarCard;

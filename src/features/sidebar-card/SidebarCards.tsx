import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import { Spacing } from '../../components/Spacing';
import Header from './components/Header';
import TodayEventsCard from './components/TodayEventsCard';
import TodoListCard from './components/TodoListCard';
import CategoryCard from './components/CategoryCard';

function SidebarCards() {
  return (
    <Container>
      <Header />
      <Spacing size={18} />
      <Cards>
        <TodayEventsCard />
        <TodoListCard />
        <CategoryCard />
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  width: 344px;
  min-width: 344px;
  min-height: 100vh;

  padding: 17px 20px;

  background-color: ${colorPalette.grayFC};
  border-radius: 0 36px 0 0;

  box-shadow:
    1px 1px 5px 0px #00000012,
    0px 4px 27px 0px #00000012;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

export default SidebarCards;

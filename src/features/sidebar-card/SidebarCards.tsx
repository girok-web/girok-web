import styled from '@emotion/styled';
import { colorPalette } from '../../styles/colorPalette';
import { Spacing } from '../../components/Spacing';
import Header from './components/Header';
import TodayEventsCard from './components/TodayEventsCard';
import TodoListCard from './components/TodoListCard';
import CategoryCard from './components/CategoryCard';
import Flex from '../../components/Flex';
import { css } from '@emotion/react';

function SidebarCards() {
  return (
    <Container>
      <Header />
      <Spacing size={18} />
      <Flex
        direction="column"
        gap={24}
        css={css`
          padding: 0 20px 17px;
        `}
      >
        <TodayEventsCard />
        <TodoListCard />
        <CategoryCard />
      </Flex>
    </Container>
  );
}

const Container = styled.div`
  width: 344px;
  min-width: 344px;
  max-height: 100vh;
  overflow-y: scroll;
  background-color: ${colorPalette.grayFC};
  border-radius: 0 36px 0 0;
  box-shadow:
    1px 1px 5px 0 #00000012,
    0 4px 27px 0 #00000012;

  /* remove scroll bar style */
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SidebarCards;

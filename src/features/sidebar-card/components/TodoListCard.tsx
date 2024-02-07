import styled from '@emotion/styled';
import Card from './Card';
import Checkbox from '../../../components/Checkbox';
import { Spacing } from '../../../components/Spacing';

const todoList = [
  { id: 1, content: 'go to market' },
  { id: 2, content: 'go to market' },
  { id: 3, content: 'go to market' },
  { id: 4, content: 'go to market' },
  { id: 5, content: 'go to market' },
  { id: 6, content: 'go to market' },
];

function TodoListCard() {
  return (
    <Card header="Todolist" addContent={() => {}}>
      <Card.Content>
        {todoList.length !== 0 ? (
          <TodoList>
            {todoList.map((todo) => (
              <TodoItem key={todo.id}>
                <Checkbox name={String(todo.id)} content={todo.content} />
              </TodoItem>
            ))}
          </TodoList>
        ) : (
          <Card.NoContent type="todo" addContent={() => {}} />
        )}
      </Card.Content>
      {todoList.length > 0 && todoList.length <= 5 && <Card.AddContentButton label="Add todo" addContent={() => {}} />}
      {todoList.length > 5 && (
        <>
          <Spacing size={9} />
          <Card.ExpandCollapseButton isExpand={true} onExpand={() => {}} onCollapse={() => {}} />
        </>
      )}
    </Card>
  );
}

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TodoItem = styled.li`
  padding: 10px 0;
`;

export default TodoListCard;

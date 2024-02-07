import styled from '@emotion/styled';
import Card from './Card';
import Checkbox from '../../../components/Checkbox';

const todoList = [
  { id: 1, content: 'go to market' },
  { id: 2, content: 'go to market' },
  { id: 3, content: 'go to market' },
  { id: 4, content: 'go to market' },
  { id: 5, content: 'go to market' },
  { id: 6, content: 'go to market' },
];

function TodoListCard() {
  const addTodo = () => {};

  return (
    <Card header="Todolist">
      <Card.Content
        addContent={addTodo}
        contentLength={todoList.length}
        확장표시기준개수={5}
        isExpand={false}
        onExpand={() => {}}
        onCollapse={() => {}}
      >
        <TodoList>
          {todoList.map((todo) => (
            <TodoItem key={todo.id}>
              <Checkbox name={String(todo.id)} content={todo.content} />
            </TodoItem>
          ))}
        </TodoList>
      </Card.Content>
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
